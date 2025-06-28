import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Download, FileText, Building, Beaker, Cpu, Wrench, Zap, Microscope, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import jsPDF from 'jspdf';

export default function ResourcesLabs() {
  const [selectedItems, setSelectedItems] = useState<Array<{id: string, name: string, lab: string, floor: string, quantity: number}>>([]);
  const [userDetails, setUserDetails] = useState({
    name: '',
    rollNo: '',
    class: '',
    branch: '',
    purpose: ''
  });
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);
  const { toast } = useToast();

  // Generate extensive equipment lists for each lab
  const generateEquipment = (baseItems: string[], count: number = 70) => {
    const variations = [
      "Digital", "Analog", "Advanced", "Precision", "High-Performance", "Professional", 
      "Automated", "Manual", "Portable", "Desktop", "Industrial", "Research-Grade",
      "Multi-Channel", "Single-Channel", "Wireless", "USB", "Bluetooth", "Smart"
    ];

    const equipment = [];
    baseItems.forEach(item => {
      equipment.push({ name: item, quantity: Math.floor(Math.random() * 10) + 1, description: `Standard ${item.toLowerCase()} for laboratory use` });
    });

    // Add variations to reach ~70 items
    while (equipment.length < count) {
      const baseItem = baseItems[Math.floor(Math.random() * baseItems.length)];
      const variation = variations[Math.floor(Math.random() * variations.length)];
      const name = `${variation} ${baseItem}`;
      if (!equipment.find(e => e.name === name)) {
        equipment.push({
          name,
          quantity: Math.floor(Math.random() * 8) + 1,
          description: `${variation} variant of ${baseItem.toLowerCase()} with enhanced features`
        });
      }
    }

    return equipment.slice(0, count);
  };

  const labCategories = [
    {
      category: "Chemistry Labs",
      icon: Beaker,
      color: "bg-green-500",
      labs: [
        {
          name: "Chemistry Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: generateEquipment([
            "Distillation Assembly", "Oil Bath with Stirrer", "UV Apparatus", "Colorimeter", 
            "pH Meter", "Analytical Balance", "Centrifuge Machine", "Incubator", "Spectrophotometer",
            "Burette", "Pipette", "Volumetric Flask", "Conical Flask", "Beaker", "Test Tube",
            "Thermometer", "Hot Plate", "Magnetic Stirrer", "Fume Hood", "Safety Shower",
            "Fire Extinguisher", "Chemical Storage Cabinet", "Vacuum Pump", "Rotary Evaporator"
          ])
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
          equipment: generateEquipment([
            "High-Performance Workstation", "Development Software Suite", "Database Server", 
            "Network Switch", "Projector System", "Backup Power Supply", "Router", "Firewall",
            "Server Rack", "KVM Switch", "Cable Management", "Network Cable", "Monitor",
            "Keyboard", "Mouse", "Webcam", "Headset", "Speaker", "Printer", "Scanner"
          ])
        },
        {
          name: "AI/ML Research Lab - Third Floor",
          floor: "Third Floor", 
          equipment: generateEquipment([
            "GPU Workstation", "High-Memory Server", "Cloud Computing Access", "Python Environment",
            "Data Storage Array", "Specialized Software", "Graphics Card", "CPU Cooler",
            "RAM Module", "SSD Drive", "Network Adapter", "USB Hub", "External Drive",
            "Backup Device", "Power Supply", "Motherboard", "Processor", "Cooling Fan"
          ])
        },
        {
          name: "Database Management Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "Database Server", "Backup System", "Network Storage", "Load Balancer",
            "Monitoring Tools", "Security Software", "Access Control", "Encryption Device",
            "Data Recovery Tools", "Performance Monitor", "Query Optimizer", "Index Manager"
          ])
        },
        {
          name: "Web Development Lab - Fourth Floor",
          floor: "Fourth Floor",
          equipment: generateEquipment([
            "Web Server", "Development Framework", "Testing Tools", "Version Control",
            "Code Editor", "Browser Testing", "Mobile Simulator", "Responsive Tester",
            "Performance Analyzer", "Security Scanner", "SEO Tools", "Analytics Platform"
          ])
        },
        {
          name: "Cybersecurity Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "Penetration Testing Tools", "Vulnerability Scanner", "Firewall System", "IDS/IPS",
            "Forensic Software", "Encryption Tools", "Network Monitor", "Security Camera",
            "Access Control System", "Biometric Scanner", "Smart Card Reader", "VPN Gateway"
          ])
        }
      ]
    },
    {
      category: "Electronics Labs",
      icon: Zap,
      color: "bg-purple-500",
      labs: [
        {
          name: "Digital Electronics Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "Digital Oscilloscope", "Function Generator", "Power Supply Unit", "Digital Multimeter",
            "Breadboard Kit", "Logic Analyzer", "IC Tester", "Soldering Station", "Wire Stripper",
            "Crimping Tool", "Heat Gun", "Desoldering Pump", "Flux", "Solder Wire",
            "Component Tester", "Signal Generator", "Frequency Counter", "Spectrum Analyzer"
          ])
        },
        {
          name: "Microprocessor Lab - Second Floor", 
          floor: "Second Floor",
          equipment: generateEquipment([
            "Microcontroller Kit", "In-Circuit Emulator", "Logic Probe Set", "EPROM Programmer",
            "Stepper Motor Kit", "Sensor Module", "Arduino Board", "Raspberry Pi", "ESP32 Module",
            "Development Board", "Programming Cable", "Jumper Wire", "Resistor Kit", "Capacitor Kit"
          ])
        },
        {
          name: "Communication Lab - Third Floor",
          floor: "Third Floor",
          equipment: generateEquipment([
            "RF Signal Generator", "Spectrum Analyzer", "Network Analyzer", "Antenna Analyzer",
            "Modulation Analyzer", "Digital Receiver", "Transmitter Module", "RF Amplifier",
            "Filter Circuit", "Mixer Circuit", "Oscillator", "Phase Detector", "Frequency Synthesizer"
          ])
        },
        {
          name: "Power Electronics Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "DC Power Supply", "AC Power Source", "Electronic Load", "Power Meter",
            "Inverter Circuit", "Converter Module", "Transformer", "Rectifier Circuit",
            "Voltage Regulator", "Current Limiter", "Protection Relay", "Circuit Breaker"
          ])
        },
        {
          name: "VLSI Design Lab - Fourth Floor",
          floor: "Fourth Floor",
          equipment: generateEquipment([
            "FPGA Development Board", "ASIC Design Software", "Layout Editor", "Simulation Tool",
            "Synthesis Software", "Place and Route Tool", "Timing Analyzer", "Verification Platform",
            "Test Bench", "Design Rule Checker", "Extraction Tool", "Characterization Setup"
          ])
        },
        {
          name: "Embedded Systems Lab - Third Floor",
          floor: "Third Floor",
          equipment: generateEquipment([
            "Embedded Development Kit", "Real-Time OS", "Cross Compiler", "JTAG Debugger",
            "Logic Analyzer", "Digital Storage Oscilloscope", "Protocol Analyzer", "Emulator Pod",
            "Target Board", "Interface Cable", "Debug Probe", "Flash Programmer"
          ])
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
          equipment: generateEquipment([
            "CNC Milling Machine", "Lathe Machine", "3D Printer", "Drilling Machine",
            "Grinding Machine", "Measuring Instrument", "Welding Equipment", "Material Testing Machine",
            "Hydraulic Press", "Pneumatic System", "Cutting Tool", "Fixture", "Jig", "Chuck",
            "Coolant System", "Chip Conveyor", "Tool Holder", "Work Holding Device"
          ])
        },
        {
          name: "CAD/CAM Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "CAD Workstation", "Engineering Simulation Software", "Plotting Machine", "3D Scanner",
            "Graphics Tablet", "High-Resolution Monitor", "Rendering Workstation", "Design Software",
            "Animation Software", "Modeling Software", "Analysis Package", "Optimization Tool"
          ])
        },
        {
          name: "Thermal Engineering Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "Heat Exchanger", "Refrigeration Unit", "Steam Generator", "Calorimeter",
            "Temperature Sensor", "Pressure Gauge", "Flow Meter", "Thermal Conductivity Apparatus",
            "Boiler", "Condenser", "Compressor", "Turbine Model", "Heat Pump", "Cooling Tower"
          ])
        },
        {
          name: "Fluid Mechanics Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: generateEquipment([
            "Wind Tunnel", "Flow Visualization", "Pump Test Rig", "Turbine Test Setup",
            "Orifice Meter", "Venturi Meter", "Rotameter", "Manometer", "Pitot Tube",
            "Flow Channel", "Pipe Network", "Valve Assembly", "Pump", "Compressor"
          ])
        },
        {
          name: "Strength of Materials Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "Universal Testing Machine", "Impact Testing Machine", "Hardness Tester", "Fatigue Testing Machine",
            "Creep Testing Setup", "Torsion Testing Machine", "Compression Testing Machine", "Bending Test Setup",
            "Extensometer", "Strain Gauge", "Load Cell", "Displacement Transducer"
          ])
        },
        {
          name: "Automotive Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: generateEquipment([
            "Engine Test Bed", "Dynamometer", "Emission Analyzer", "Fuel Injection Tester",
            "Brake Test Setup", "Suspension Test Rig", "Transmission Test Bench", "Steering System",
            "Diagnostic Scanner", "Oscilloscope", "Multimeter", "Pressure Tester"
          ])
        },
        {
          name: "Robotics Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "Industrial Robot", "Robot Controller", "Vision System", "Gripper Assembly",
            "Servo Motor", "Encoder", "Sensor Package", "Programming Terminal", "Safety System",
            "End Effector", "Robot Arm", "Mobile Robot", "Autonomous Vehicle Kit"
          ])
        }
      ]
    },
    {
      category: "Civil Engineering Labs",
      icon: Building,
      color: "bg-gray-600",
      labs: [
        {
          name: "Concrete Testing Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: generateEquipment([
            "Compression Testing Machine", "Flexural Testing Setup", "Concrete Mixer", "Slump Cone",
            "Vibrating Table", "Cube Molds", "Cylinder Molds", "Beam Molds", "Curing Tank",
            "Schmidt Hammer", "Ultrasonic Pulse Velocity Tester", "Core Cutting Machine"
          ])
        },
        {
          name: "Surveying Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "Total Station", "Theodolite", "Level Instrument", "GPS Equipment", "Measuring Chain",
            "Ranging Rod", "Prism", "Tripod", "Compass", "Planimeter", "Auto Level", "Laser Level"
          ])
        },
        {
          name: "Structural Analysis Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "Structural Analysis Software", "Model Testing Frame", "Load Application System", "Strain Measurement",
            "Displacement Transducer", "Data Acquisition System", "Vibration Analyzer", "Modal Testing"
          ])
        },
        {
          name: "Geotechnical Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: generateEquipment([
            "Standard Penetration Test", "Triaxial Test Apparatus", "Direct Shear Test", "Consolidation Test",
            "Compaction Test Equipment", "Permeability Test Setup", "California Bearing Ratio Test", "Proctor Test"
          ])
        },
        {
          name: "Environmental Engineering Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "Water Quality Analyzer", "Air Quality Monitor", "BOD Incubator", "COD Digester",
            "Turbidity Meter", "Dissolved Oxygen Meter", "Spectrophotometer", "Jar Test Apparatus"
          ])
        },
        {
          name: "Transportation Lab - Ground Floor",
          floor: "Ground Floor",
          equipment: generateEquipment([
            "Marshall Stability Test", "Los Angeles Abrasion Test", "Aggregate Impact Test", "Penetration Test",
            "Ductility Test", "Softening Point Test", "Specific Gravity Test", "Bitumen Extraction"
          ])
        }
      ]
    },
    {
      category: "Biotechnology Labs",
      icon: Microscope,
      color: "bg-teal-500",
      labs: [
        {
          name: "Microbiology Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "Autoclave", "Laminar Air Flow", "Incubator", "Microscope", "Centrifuge",
            "Spectrophotometer", "pH Meter", "Water Bath", "Magnetic Stirrer", "Petri Dish",
            "Culture Media", "Inoculation Loop", "Bunsen Burner", "Safety Cabinet"
          ])
        },
        {
          name: "Cell Culture Lab - Third Floor",
          floor: "Third Floor",
          equipment: generateEquipment([
            "CO2 Incubator", "Biosafety Cabinet", "Cell Counter", "Inverted Microscope", "Centrifuge",
            "Water Bath", "Freezer", "Liquid Nitrogen Tank", "Cell Culture Flask", "Pipette"
          ])
        },
        {
          name: "Molecular Biology Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "PCR Machine", "Gel Electrophoresis", "DNA Sequencer", "Thermal Cycler", "Microcentrifuge",
            "Vortex Mixer", "UV Transilluminator", "Gel Documentation", "Freezer", "Refrigerator"
          ])
        },
        {
          name: "Biochemistry Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "Spectrophotometer", "HPLC System", "Chromatography Setup", "Electrophoresis Unit", "Fraction Collector",
            "Protein Purification", "Column Chromatography", "Enzyme Assay Kit", "Buffer Solution"
          ])
        }
      ]
    },
    {
      category: "Physics Labs",
      icon: Settings,
      color: "bg-indigo-500",
      labs: [
        {
          name: "Optics Lab - Second Floor",
          floor: "Second Floor",
          equipment: generateEquipment([
            "Laser System", "Optical Bench", "Spectrometer", "Interferometer", "Polarimeter",
            "Photometer", "Monochromator", "Optical Fiber", "Lens Set", "Prism", "Mirror",
            "Light Source", "Detector", "Optical Table", "Mount", "Beam Splitter"
          ])
        },
        {
          name: "Nuclear Physics Lab - Third Floor",
          floor: "Third Floor",
          equipment: generateEquipment([
            "Geiger Counter", "Scintillation Detector", "Radiation Monitor", "Alpha Counter", "Beta Counter",
            "Gamma Spectrometer", "Dosimeter", "Lead Shield", "Radioactive Source", "Safety Equipment"
          ])
        },
        {
          name: "Solid State Physics Lab - First Floor",
          floor: "First Floor",
          equipment: generateEquipment([
            "X-Ray Diffractometer", "Crystal Structure Kit", "Hall Effect Setup", "Four Probe Method",
            "Dielectric Constant Measurement", "Magnetic Susceptibility", "Thermal Conductivity"
          ])
        }
      ]
    }
  ];

  const addToRequest = (equipment: any, lab: string, floor: string) => {
    const item = {
      id: `${lab}-${equipment.name}`,
      name: equipment.name,
      lab: lab,
      floor: floor,
      quantity: 1
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

  const updateQuantity = (itemId: string, quantity: number) => {
    setSelectedItems(selectedItems.map(item => 
      item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
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

    if (!userDetails.name || !userDetails.rollNo || !userDetails.class || !userDetails.branch) {
      toast({
        title: "Missing Information",
        description: "Please fill in all your details to generate the invoice",
        variant: "destructive"
      });
      return;
    }

    // Generate PDF using jsPDF
    const pdf = new jsPDF();

    // Header
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TCET EDIC', 20, 20);
    pdf.setFontSize(16);
    pdf.text('LABORATORY RESOURCE REQUEST INVOICE', 20, 35);

    // Student details
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Student Details:', 20, 55);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Name: ${userDetails.name}`, 20, 65);
    pdf.text(`Roll No: ${userDetails.rollNo}`, 20, 75);
    pdf.text(`Class: ${userDetails.class}`, 20, 85);
    pdf.text(`Branch: ${userDetails.branch}`, 20, 95);
    pdf.text(`Purpose: ${userDetails.purpose}`, 20, 105);

    // Request details
    pdf.setFont('helvetica', 'bold');
    pdf.text('Requested Equipment:', 20, 125);
    pdf.setFont('helvetica', 'normal');

    let yPosition = 135;
    selectedItems.forEach((item, index) => {
      const itemText = `${index + 1}. ${item.name} (Qty: ${item.quantity}) - ${item.lab}, ${item.floor}`;
      pdf.text(itemText, 20, yPosition);
      yPosition += 10;
    });

    // Summary
    yPosition += 10;
    pdf.setFont('helvetica', 'bold');
    pdf.text(`Total Items: ${selectedItems.length}`, 20, yPosition);
    yPosition += 10;
    pdf.text(`Labs Involved: ${new Set(selectedItems.map(item => item.lab)).size}`, 20, yPosition);
    yPosition += 10;
    pdf.text(`Request Date: ${new Date().toLocaleDateString()}`, 20, yPosition);

    // Notice
    yPosition += 20;
    pdf.setFont('helvetica', 'italic');
    pdf.text('This request is for academic purposes only. No payment is required.', 20, yPosition);

    // Approvals section
    yPosition += 20;
    pdf.setFont('helvetica', 'bold');
    pdf.text('Approvals Required:', 20, yPosition);
    pdf.setFont('helvetica', 'normal');
    yPosition += 15;
    pdf.text('1. Faculty Mentor: Prof. Ashish Shirke', 20, yPosition);
    pdf.text('Signature: _____________________', 120, yPosition);
    yPosition += 15;
    pdf.text('2. Dean R&D: Dr. Vinitkumar Dongre', 20, yPosition);
    pdf.text('Signature: _____________________', 120, yPosition);

    // Footer
    yPosition += 25;
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text('Generated by TCET EDIC Resource Management System', 20, yPosition);

    // Save the PDF
    pdf.save(`TCET_EDIC_Resource_Request_${userDetails.rollNo}_${Date.now()}.pdf`);

    toast({
      title: "PDF Invoice Generated",
      description: "Your resource request invoice has been downloaded as PDF. Please get it signed by the faculty mentors.",
    });

    setShowInvoiceForm(false);
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
              Access TCET's comprehensive collection of 50+ laboratory facilities with 70+ equipment types per lab
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
                        {category.category} ({category.labs.length} Labs)
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
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                              {lab.equipment.map((equipment, equipIndex) => (
                                <Card key={equipIndex} className="hover:shadow-md transition-shadow duration-200">
                                  <CardHeader className="pb-2">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <CardTitle className="text-sm text-[var(--tcet-dark)] dark:text-white">
                                          {equipment.name}
                                        </CardTitle>
                                        <div className="flex items-center mt-1">
                                          <Badge variant="outline" className="text-xs mr-1">
                                            Qty: {equipment.quantity}
                                          </Badge>
                                          <Badge variant="outline" className="text-xs">
                                            {lab.floor}
                                          </Badge>
                                        </div>
                                      </div>
                                      <Button
                                        size="sm"
                                        onClick={() => addToRequest(equipment, lab.name, lab.floor)}
                                        className="bg-[var(--tcet-blue)] hover:bg-blue-700 ml-2 text-xs px-2 py-1"
                                      >
                                        <Plus className="w-3 h-3 mr-1" />
                                        Add
                                      </Button>
                                    </div>
                                  </CardHeader>
                                  <CardContent className="pt-0">
                                    <p className="text-xs text-[var(--tcet-dark)]/70 dark:text-white/70">
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
                              <div className="flex-1">
                                <div className="font-medium text-[var(--tcet-dark)] dark:text-white">
                                  {item.name}
                                </div>
                                <div className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                                  {item.lab} • {item.floor}
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Label className="text-sm">Qty:</Label>
                                <Input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                  className="w-16 text-center"
                                />
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => removeFromRequest(item.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">
                            Invoice Details
                          </h4>
                          <div className="text-sm text-[var(--tcet-dark)]/70 dark:text-white/70 space-y-1">
                            <p>• Your details will be included in the request form</p>
                            <p>• Complete list of requested items with lab locations and quantities</p>
                            <p>• Requires signatures from Prof. Ashish Shirke and Dr. Vinitkumar Dongre</p>
                            <p>• No payment required - for academic use only</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Dialog open={showInvoiceForm} onOpenChange={setShowInvoiceForm}>
                            <DialogTrigger asChild>
                              <Button className="flex-1 bg-[var(--tcet-blue)] hover:bg-blue-700">
                                <Download className="w-4 h-4 mr-2" />
                                Generate Invoice
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>Student Details</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="name">Full Name</Label>
                                  <Input
                                    id="name"
                                    value={userDetails.name}
                                    onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                                    placeholder="Enter your full name"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="rollNo">Roll Number</Label>
                                  <Input
                                    id="rollNo"
                                    value={userDetails.rollNo}
                                    onChange={(e) => setUserDetails({...userDetails, rollNo: e.target.value})}
                                    placeholder="Enter your roll number"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="class">Class</Label>
                                  <Input
                                    id="class"
                                    value={userDetails.class}
                                    onChange={(e) => setUserDetails({...userDetails, class: e.target.value})}
                                    placeholder="e.g., TE, SE, FE"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="branch">Branch</Label>
                                  <Input
                                    id="branch"
                                    value={userDetails.branch}
                                    onChange={(e) => setUserDetails({...userDetails, branch: e.target.value})}
                                    placeholder="e.g., COMP, IT, EXTC"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="purpose">Purpose</Label>
                                  <Input
                                    id="purpose"
                                    value={userDetails.purpose}
                                    onChange={(e) => setUserDetails({...userDetails, purpose: e.target.value})}
                                    placeholder="Project/Assignment/Research"
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <Button onClick={generateInvoice} className="flex-1">
                                    Download Invoice
                                  </Button>
                                  <Button variant="outline" onClick={() => setShowInvoiceForm(false)}>
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
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