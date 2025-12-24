import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Building,
  Video,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Check,
  Upload,
  CreditCard,
  Wallet,
  PartyPopper,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 1 | 2 | 3 | "success";

const services = [
  { id: "consulta", name: "Consulta de valoración", price: "$1,200 MXN" },
  { id: "infiltracion", name: "Infiltración columna", price: "Desde $8,000 MXN" },
  { id: "cirugia", name: "Cirugía (cotización)", price: "Personalizado" },
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"
];

const getNextDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    if (date.getDay() !== 0) { // Skip Sundays
      days.push(date);
    }
  }
  return days.slice(0, 6);
};

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    service: "",
    modality: "presencial",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    country: "MX",
    symptoms: "",
    payment: "deposit",
  });

  const nextDays = getNextDays();

  const handleNext = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      // Simulate booking completion
      setStep("success");
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      service: "",
      modality: "presencial",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      country: "MX",
      symptoms: "",
      payment: "deposit",
    });
    onClose();
  };

  const isStep1Valid = formData.service && formData.date && formData.time;
  const isStep2Valid = formData.name && formData.phone && formData.email;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            {step === "success" ? "¡Cita confirmada!" : "Reservar valoración"}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        {step !== "success" && (
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    s === step
                      ? "bg-cta text-cta-foreground"
                      : s < step
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s < step ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 rounded-full ${
                      s < step ? "bg-accent" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Service & Schedule */}
        {step === 1 && (
          <div className="space-y-6">
            {/* Service Selection */}
            <div className="space-y-3">
              <Label>Servicio</Label>
              <div className="grid gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setFormData({ ...formData, service: service.id })}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      formData.service === service.id
                        ? "border-cta bg-cta/5"
                        : "border-border hover:border-cta/50"
                    }`}
                  >
                    <span className="font-medium text-foreground">{service.name}</span>
                    <span className="text-sm text-muted-foreground">{service.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Modality */}
            <div className="space-y-3">
              <Label>Modalidad</Label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setFormData({ ...formData, modality: "presencial" })}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                    formData.modality === "presencial"
                      ? "border-cta bg-cta/5"
                      : "border-border hover:border-cta/50"
                  }`}
                >
                  <Building className="w-4 h-4" />
                  Presencial
                </button>
                <button
                  onClick={() => setFormData({ ...formData, modality: "telemedicina" })}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                    formData.modality === "telemedicina"
                      ? "border-cta bg-cta/5"
                      : "border-border hover:border-cta/50"
                  }`}
                >
                  <Video className="w-4 h-4" />
                  Telemedicina
                </button>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-3">
              <Label>Fecha</Label>
              <div className="grid grid-cols-3 gap-2">
                {nextDays.map((date) => {
                  const dateStr = date.toISOString().split("T")[0];
                  const dayName = date.toLocaleDateString("es-MX", { weekday: "short" });
                  const dayNum = date.getDate();
                  const month = date.toLocaleDateString("es-MX", { month: "short" });

                  return (
                    <button
                      key={dateStr}
                      onClick={() => setFormData({ ...formData, date: dateStr })}
                      className={`p-3 rounded-lg border-2 text-center transition-all ${
                        formData.date === dateStr
                          ? "border-cta bg-cta/5"
                          : "border-border hover:border-cta/50"
                      }`}
                    >
                      <p className="text-xs text-muted-foreground capitalize">{dayName}</p>
                      <p className="font-semibold text-foreground">{dayNum}</p>
                      <p className="text-xs text-muted-foreground capitalize">{month}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-3">
              <Label>Hora</Label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setFormData({ ...formData, time })}
                    className={`p-2 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.time === time
                        ? "border-cta bg-cta/5 text-cta"
                        : "border-border hover:border-cta/50 text-foreground"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Personal Info */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+52 656 123 4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">País</Label>
              <Select
                value={formData.country}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MX">🇲🇽 México</SelectItem>
                  <SelectItem value="US">🇺🇸 Estados Unidos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="symptoms">Describe tus síntomas (opcional)</Label>
              <Textarea
                id="symptoms"
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                placeholder="Dolor de espalda, hormigueo en piernas..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Adjuntar estudios (opcional)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-cta/50 transition-colors">
                <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Arrastra archivos o haz clic para subir
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-6">
            {/* Summary */}
            <div className="p-4 bg-muted rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Servicio:</span>
                <span className="font-medium text-foreground">
                  {services.find((s) => s.id === formData.service)?.name}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Fecha:</span>
                <span className="font-medium text-foreground">
                  {new Date(formData.date).toLocaleDateString("es-MX", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Hora:</span>
                <span className="font-medium text-foreground">{formData.time}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Modalidad:</span>
                <span className="font-medium text-foreground capitalize">
                  {formData.modality}
                </span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-3">
              <Label>Método de pago</Label>
              <div className="space-y-2">
                <button
                  onClick={() => setFormData({ ...formData, payment: "deposit" })}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                    formData.payment === "deposit"
                      ? "border-cta bg-cta/5"
                      : "border-border hover:border-cta/50"
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-cta" />
                  <div className="text-left flex-1">
                    <p className="font-medium text-foreground">Depósito $200 MXN</p>
                    <p className="text-xs text-muted-foreground">
                      Se aplica al total. Reembolso si cancelas 48h antes.
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, payment: "clinic" })}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                    formData.payment === "clinic"
                      ? "border-cta bg-cta/5"
                      : "border-border hover:border-cta/50"
                  }`}
                >
                  <Wallet className="w-5 h-5 text-primary" />
                  <div className="text-left flex-1">
                    <p className="font-medium text-foreground">Pagar en consulta</p>
                    <p className="text-xs text-muted-foreground">
                      Efectivo o tarjeta al llegar a Star Médica.
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Policy Note */}
            <p className="text-xs text-muted-foreground">
              Al confirmar, aceptas nuestros{" "}
              <a href="#" className="text-primary underline">
                Términos y Condiciones
              </a>{" "}
              y{" "}
              <a href="#" className="text-primary underline">
                Política de Privacidad
              </a>
              .
            </p>
          </div>
        )}

        {/* Success State */}
        {step === "success" && (
          <div className="text-center py-6">
            <div className="w-20 h-20 rounded-full bg-cta/10 flex items-center justify-center mx-auto mb-6">
              <PartyPopper className="w-10 h-10 text-cta" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
              ¡Cita confirmada!
            </h3>
            <p className="text-muted-foreground mb-6">
              Tu Medical Agent te contactará en las próximas 2 horas para confirmar detalles.
            </p>

            <div className="p-4 bg-muted rounded-lg text-left mb-6">
              <p className="text-sm text-muted-foreground mb-1">Referencia de cita</p>
              <p className="font-mono font-bold text-foreground">LYM-{Date.now().toString().slice(-6)}</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                <Calendar className="w-4 h-4" />
                Agregar a calendario
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleClose}>
                Cerrar
              </Button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        {step !== "success" && (
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </Button>
            )}
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleNext}
              disabled={
                (step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)
              }
            >
              {step === 3 ? "Confirmar cita" : "Continuar"}
              {step !== 3 && <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
