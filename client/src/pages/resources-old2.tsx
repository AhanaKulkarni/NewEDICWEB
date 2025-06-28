import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Download, FileText, Building, Beaker, Cpu, Wrench } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function ResourcesLabs() {
  const [selectedItems, setSelectedItems] = useState<Array<{id: string, name: string, lab: string, floor: string}>>([]);
  const { toast } = useToast();

  const labCategories = [
    {
      category: "Chemistry Labs",
      icon: Beaker,
      color: "bg-green-500",
      labs: [
        {
          name: "Chemistry Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: [
            { name: "Distillation Assembly", quantity: 1, description: "Complete distillation setup for separation processes" },
            { name: "Oil Bath with Stirrer", quantity: 1, description: "Temperature controlled heating with magnetic stirring" },
            { name: "UV Apparatus", quantity: 1, description: "UV-Visible spectrophotometer for analysis" },
            { name: "Colorimeter", quantity: 4, description: "Digital colorimeter for concentration analysis" },
            { name: "pH Meter", quantity: 3, description: "Digital pH measurement device" },
            { name: "Analytical Balance", quantity: 2, description: "High precision weighing balance" },
            { name: "Centrifuge Machine", quantity: 2, description: "High-speed sample separation" },
            { name: "Incubator", quantity: 1, description: "Temperature controlled sample incubation" }
          ]
        },
        {
          name: "Organic Chemistry Lab - First Floor",
          floor: "First Floor",
          equipment: [
            { name: "Rotary Evaporator", quantity: 2, description: "Solvent removal under reduced pressure" },
            { name: "Melting Point Apparatus", quantity: 3, description: "Compound identification and purity testing" },
            { name: "Reflux Setup", quantity: 6, description: "Heating under reflux conditions" },
            { name: "Separation Funnel", quantity: 8, description: "Liquid-liquid extraction" },
            { name: "Heating Mantle", quantity: 10, description: "Controlled heating for round bottom flasks" },
            { name: "Magnetic Stirrer", quantity: 12, description: "Uniform mixing of solutions" }
          ]
        }
      ]
    },
    {
      category: "Computer Labs",
      icon: Cpu,
      color: "bg-blue-500",
      labs: [
        {
          name: "Software Development Lab - Second Floor",
          floor: "Second Floor",
          equipment: [
            { name: "High-Performance Workstations", quantity: 30, description: "Intel i7 processors with 16GB RAM" },
            { name: "Development Software Suite", quantity: 30, description: "Visual Studio, IntelliJ, Eclipse IDEs" },
            { name: "Database Servers", quantity: 3, description: "MySQL, PostgreSQL, MongoDB instances" },
            { name: "Network Switches", quantity: 4, description: "Gigabit Ethernet connectivity" },
            { name: "Projector System", quantity: 2, description: "4K display for presentations" },
            { name: "Backup Power Supply", quantity: 1, description: "UPS system for continuous operation" }
          ]
        },
        {
          name: "AI/ML Research Lab - Third Floor",
          floor: "Third Floor",
          equipment: [
            { name: "GPU Workstations", quantity: 10, description: "NVIDIA RTX 4090 for deep learning" },
            { name: "High-Memory Servers", quantity: 3, description: "128GB RAM for large dataset processing" },
            { name: "Cloud Computing Access", quantity: 1, description: "AWS/Azure credits for research" },
            { name: "Python Environment", quantity: 10, description: "Anaconda with ML libraries" },
            { name: "Data Storage Array", quantity: 1, description: "10TB network attached storage" },
            { name: "Specialized Software", quantity: 1, description: "TensorFlow, PyTorch, MATLAB licenses" }
          ]
        }
      ]
    },
    {
      category: "Electronics Labs",
      icon: Cpu,
      color: "bg-purple-500",
      labs: [
        {
          name: "Digital Electronics Lab - Second Floor",
          floor: "Second Floor",
          equipment: [
            { name: "Digital Oscilloscope", quantity: 15, description: "100MHz bandwidth, 4-channel" },
            { name: "Function Generator", quantity: 15, description: "Waveform generation up to 25MHz" },
            { name: "Power Supply Unit", quantity: 20, description: "Variable DC power supply 0-30V" },
            { name: "Digital Multimeter", quantity: 25, description: "High precision measurement" },
            { name: "Breadboard Kit", quantity: 30, description: "Solderless circuit prototyping" },
            { name: "Logic Analyzer", quantity: 5, description: "Multi-channel digital signal analysis" },
            { name: "IC Tester", quantity: 3, description: "Integrated circuit functionality testing" },
            { name: "Soldering Station", quantity: 10, description: "Temperature controlled soldering" }
          ]
        },
        {
          name: "Microprocessor Lab - Second Floor",
          floor: "Second Floor",
          equipment: [
            { name: "Microcontroller Kits", quantity: 20, description: "Arduino, ESP32, STM32 development boards" },
            { name: "In-Circuit Emulator", quantity: 5, description: "Real-time debugging and programming" },
            { name: "Logic Probe Set", quantity: 15, description: "Digital signal testing" },
            { name: "EPROM Programmer", quantity: 3, description: "Memory device programming" },
            { name: "Stepper Motor Kit", quantity: 10, description: "Motor control experiments" },
            { name: "Sensor Modules", quantity: 50, description: "Temperature, pressure, motion sensors" }
          ]
        }
      ]
    },
    {
      category: "Mechanical Labs",
      icon: Wrench,
      color: "bg-orange-500",
      labs: [
        {
          name: "Manufacturing Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: [
            { name: "CNC Milling Machine", quantity: 2, description: "3-axis computer controlled milling" },
            { name: "Lathe Machine", quantity: 4, description: "Precision turning operations" },
            { name: "3D Printer", quantity: 3, description: "FDM and SLA printing technology" },
            { name: "Drilling Machine", quantity: 6, description: "Various bore size capabilities" },
            { name: "Grinding Machine", quantity: 2, description: "Surface finishing operations" },
            { name: "Measuring Instruments", quantity: 20, description: "Calipers, micrometers, gauges" },
            { name: "Welding Equipment", quantity: 4, description: "Arc and MIG welding stations" },
            { name: "Material Testing Machine", quantity: 1, description: "Tensile and compression testing" }
          ]
        },
        {
          name: "CAD/CAM Lab - First Floor",
          floor: "First Floor",
          equipment: [
            { name: "CAD Workstations", quantity: 25, description: "SolidWorks, AutoCAD, CATIA licenses" },
            { name: "Engineering Simulation Software", quantity: 25, description: "ANSYS, MATLAB Simulink" },
            { name: "Plotting Machine", quantity: 2, description: "Large format technical drawings" },
            { name: "3D Scanner", quantity: 1, description: "Reverse engineering capabilities" },
            { name: "Graphics Tablets", quantity: 25, description: "Precision design input devices" },
            { name: "High-Resolution Monitors", quantity: 25, description: "27-inch 4K displays for design work" }
          ]
        }
      ]
    }
  ];

  const addToRequest = (equipment: any, lab: string, floor: string) => {
    const item = {
      id: `${lab}-${equipment.name}`,
      name: equipment.name,
      lab: lab,
      floor: floor
    };
    
    if (!selectedItems.find(i => i.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
      toast({
        title: "Added to Request",
        description: `${equipment.name} added to your resource request`,
      });
    }
  };

  const removeFromRequest = (itemId: string) => {
    setSelectedItems(selectedItems.filter(item => item.id !== itemId));
  };

  const generateInvoice = () => {
    if (selectedItems.length === 0) {
      toast({
        title: "No Items Selected",
        description: "Please add some equipment to your request first",
        variant: "destructive"
      });
      return;
    }

    // This would generate a PDF invoice
    toast({
      title: "Invoice Generated",
      description: "Your resource request invoice has been generated and is ready for download",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              Lab Resources
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              Access TCET's comprehensive collection of 70+ laboratory equipment and resources for your projects
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="labs" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="labs">Laboratory Equipment</TabsTrigger>
              <TabsTrigger value="request">Resource Request ({selectedItems.length})</TabsTrigger>
            </TabsList>

            {/* Labs Content */}
            <TabsContent value="labs">
              <div className="space-y-8">
                {labCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white">
                        {category.category}
                      </h2>
                    </div>

                    <Accordion type="multiple" className="space-y-4">
                      {category.labs.map((lab, labIndex) => (
                        <AccordionItem 
                          key={labIndex} 
                          value={`${categoryIndex}-${labIndex}`}
                          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                            <div className="flex items-center justify-between w-full mr-4">
                              <div className="flex items-center">
                                <Building className="w-5 h-5 text-[var(--tcet-blue)] mr-3" />
                                <div className="text-left">
                                  <h3 className="font-semibold text-[var(--tcet-dark)] dark:text-white">
                                    {lab.name}
                                  </h3>
                                  <p className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                                    {lab.floor} • {lab.equipment.length} Equipment Types
                                  </p>
                                </div>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              {lab.equipment.map((equipment, equipIndex) => (
                                <Card key={equipIndex} className="hover:shadow-md transition-shadow duration-200">
                                  <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white">
                                          {equipment.name}
                                        </CardTitle>
                                        <div className="flex items-center mt-2">
                                          <Badge variant="outline" className="mr-2">
                                            Qty: {equipment.quantity}
                                          </Badge>
                                          <Badge variant="outline">
                                            {lab.floor}
                                          </Badge>
                                        </div>
                                      </div>
                                      <Button
                                        size="sm"
                                        onClick={() => addToRequest(equipment, lab.name, lab.floor)}
                                        className="bg-[var(--tcet-blue)] hover:bg-blue-700 ml-2"
                                      >
                                        <Plus className="w-4 h-4 mr-1" />
                                        Add
                                      </Button>
                                    </div>
                                  </CardHeader>
                                  <CardContent>
                                    <p className="text-sm text-[var(--tcet-dark)]/70 dark:text-white/70">
                                      {equipment.description}
                                    </p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Request Content */}
            <TabsContent value="request">
              <div className="max-w-4xl mx-auto">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[var(--tcet-dark)] dark:text-white flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-[var(--tcet-blue)]" />
                      Resource Request Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedItems.length === 0 ? (
                      <div className="text-center py-12">
                        <FileText className="w-16 h-16 mx-auto mb-4 text-[var(--tcet-dark)]/30 dark:text-white/30" />
                        <h3 className="text-xl font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">
                          No Items Selected
                        </h3>
                        <p className="text-[var(--tcet-dark)]/60 dark:text-white/60">
                          Browse the labs and add equipment to your request
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                          <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">
                            Request Summary
                          </h4>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">Total Items:</span>
                              <div className="font-semibold text-[var(--tcet-blue)]">{selectedItems.length}</div>
                            </div>
                            <div>
                              <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">Labs Involved:</span>
                              <div className="font-semibold text-[var(--tcet-blue)]">
                                {new Set(selectedItems.map(item => item.lab)).size}
                              </div>
                            </div>
                            <div>
                              <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">Status:</span>
                              <div className="font-semibold text-green-600">Ready to Submit</div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white">
                            Selected Equipment
                          </h4>
                          {selectedItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div>
                                <div className="font-medium text-[var(--tcet-dark)] dark:text-white">
                                  {item.name}
                                </div>
                                <div className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                                  {item.lab} • {item.floor}
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => removeFromRequest(item.id)}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">
                            Invoice Details
                          </h4>
                          <div className="text-sm text-[var(--tcet-dark)]/70 dark:text-white/70 space-y-1">
                            <p>• Your Name/Roll No will be included</p>
                            <p>• List of all requested items with lab locations</p>
                            <p>• Auto-includes signatures of Faculty Mentor (Ashish Sir) and Dr. Vinitkumar Dongre</p>
                            <p>• No payment required - for academic use only</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            onClick={generateInvoice}
                            className="flex-1 bg-[var(--tcet-blue)] hover:bg-blue-700"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Generate Invoice
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setSelectedItems([])}
                            className="px-8"
                          >
                            Clear All
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}