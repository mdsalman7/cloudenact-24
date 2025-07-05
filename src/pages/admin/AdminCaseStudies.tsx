import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
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

const AdminCaseStudies = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    client: "",
    industry: "",
    challenge: "",
    solution: "",
    duration: "",
    technologies: "",
    testimonial: "",
    image_url: ""
  });

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch case studies',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const technologiesArray = formData.technologies.split(',').map(t => t.trim()).filter(t => t);
    
    try {
      const caseStudyData = {
        ...formData,
        technologies: technologiesArray,
        user_id: user.id
      };

      let error;
      if (editingId) {
        const { error: updateError } = await supabase
          .from('case_studies')
          .update(caseStudyData)
          .eq('id', editingId);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('case_studies')
          .insert([caseStudyData]);
        error = insertError;
      }

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Case study ${editingId ? 'updated' : 'created'} successfully`,
      });

      setShowForm(false);
      setEditingId(null);
      setFormData({
        title: "",
        client: "",
        industry: "",
        challenge: "",
        solution: "",
        duration: "",
        technologies: "",
        testimonial: "",
        image_url: ""
      });
      fetchCaseStudies();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save case study',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (caseStudy: any) => {
    setFormData({
      title: caseStudy.title,
      client: caseStudy.client,
      industry: caseStudy.industry,
      challenge: caseStudy.challenge,
      solution: caseStudy.solution,
      duration: caseStudy.duration || "",
      technologies: caseStudy.technologies?.join(', ') || "",
      testimonial: caseStudy.testimonial || "",
      image_url: caseStudy.image_url || ""
    });
    setEditingId(caseStudy.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;

    try {
      const { error } = await supabase
        .from('case_studies')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Case study deleted successfully',
      });
      fetchCaseStudies();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete case study',
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Case Studies</h1>
            <p className="text-gray-600">Manage client success stories and project showcases</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Case Study
          </Button>
        </div>

        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingId ? 'Edit' : 'Add New'} Case Study</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Enter case study title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Client</label>
                    <Input
                      value={formData.client}
                      onChange={(e) => setFormData({...formData, client: e.target.value})}
                      placeholder="Client name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Industry</label>
                    <Input
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      placeholder="Industry sector"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Duration</label>
                    <Input
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="Project duration"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Challenge</label>
                  <Textarea
                    value={formData.challenge}
                    onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                    placeholder="Describe the client's challenge"
                    rows={3}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Solution</label>
                  <Textarea
                    value={formData.solution}
                    onChange={(e) => setFormData({...formData, solution: e.target.value})}
                    placeholder="Describe the solution provided"
                    rows={3}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Technologies</label>
                  <Input
                    value={formData.technologies}
                    onChange={(e) => setFormData({...formData, technologies: e.target.value})}
                    placeholder="Technologies used (comma separated)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Client Testimonial</label>
                  <Textarea
                    value={formData.testimonial}
                    onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
                    placeholder="Client testimonial quote"
                    rows={2}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <Input
                    value={formData.image_url}
                    onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                    placeholder="Unsplash image ID or full URL"
                  />
                </div>

                <div className="flex space-x-4">
                  <Button type="submit">Save Case Study</Button>
                  <Button variant="outline" onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setFormData({
                      title: "",
                      client: "",
                      industry: "",
                      challenge: "",
                      solution: "",
                      duration: "",
                      technologies: "",
                      testimonial: "",
                      image_url: ""
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
            <CardTitle>Existing Case Studies</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {caseStudies.map((study) => (
                    <TableRow key={study.id}>
                      <TableCell className="font-medium">{study.title}</TableCell>
                      <TableCell>{study.client}</TableCell>
                      <TableCell>{study.industry}</TableCell>
                      <TableCell>
                        <Badge variant={study.status === "published" ? "default" : "secondary"}>
                          {study.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(study.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleEdit(study)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDelete(study.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {caseStudies.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                        No case studies found. Create your first one!
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

export default AdminCaseStudies;
