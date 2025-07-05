import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminSolutions = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [solutions, setSolutions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    features: "",
    price: "",
    icon: "",
    popular: false
  });

  useEffect(() => {
    fetchSolutions();
  }, []);

  const fetchSolutions = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('solutions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSolutions(data || []);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch solutions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const featuresArray = formData.features.split('\n').map(f => f.trim()).filter(f => f);
    
    try {
      const solutionData = {
        ...formData,
        features: featuresArray,
        user_id: user.id
      };

      let error;
      if (editingId) {
        const { error: updateError } = await supabase
          .from('solutions')
          .update(solutionData)
          .eq('id', editingId);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('solutions')
          .insert([solutionData]);
        error = insertError;
      }

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Solution ${editingId ? 'updated' : 'created'} successfully`,
      });

      setShowForm(false);
      setEditingId(null);
      setFormData({
        title: "",
        description: "",
        features: "",
        price: "",
        icon: "",
        popular: false
      });
      fetchSolutions();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save solution',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (solution: any) => {
    setFormData({
      title: solution.title,
      description: solution.description,
      features: solution.features?.join('\n') || "",
      price: solution.price,
      icon: solution.icon || "",
      popular: solution.popular || false
    });
    setEditingId(solution.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this solution?')) return;

    try {
      const { error } = await supabase
        .from('solutions')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Solution deleted successfully',
      });
      fetchSolutions();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete solution',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Solutions</h1>
            <p className="text-gray-600">Manage service offerings and pricing</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Solution
          </Button>
        </div>

        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingId ? 'Edit' : 'Add New'} Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Solution title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Price</label>
                    <Input
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      placeholder="Starting at $X,XXX"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Describe the solution"
                    rows={3}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Features</label>
                  <Textarea
                    value={formData.features}
                    onChange={(e) => setFormData({...formData, features: e.target.value})}
                    placeholder="List features (one per line)"
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Icon</label>
                  <Input
                    value={formData.icon}
                    onChange={(e) => setFormData({...formData, icon: e.target.value})}
                    placeholder="Lucide icon name (e.g., Cloud, Shield, Zap)"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="popular"
                    checked={formData.popular}
                    onChange={(e) => setFormData({...formData, popular: e.target.checked})}
                    className="rounded"
                  />
                  <label htmlFor="popular" className="text-sm font-medium">
                    Mark as Popular
                  </label>
                </div>

                <div className="flex space-x-4">
                  <Button type="submit">Save Solution</Button>
                  <Button variant="outline" onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setFormData({
                      title: "",
                      description: "",
                      features: "",
                      price: "",
                      icon: "",
                      popular: false
                    });
                  }}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Existing Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Popular</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {solutions.map((solution) => (
                    <TableRow key={solution.id}>
                      <TableCell className="font-medium">{solution.title}</TableCell>
                      <TableCell>{solution.price}</TableCell>
                      <TableCell>
                        <Badge variant="default">{solution.status}</Badge>
                      </TableCell>
                      <TableCell>
                        {solution.popular && <Badge variant="secondary">Popular</Badge>}
                      </TableCell>
                      <TableCell>{new Date(solution.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(solution)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDelete(solution.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {solutions.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                        No solutions found. Create your first one!
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSolutions;
