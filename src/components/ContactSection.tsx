import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DraggableCard from "./DraggableCard";
import { MapPin, Mail, User } from "lucide-react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast
      .promise(
        emailjs.send(
          "service_o4kswf9",
          "template_awxv61s",
          formData,
          "U7gYdpQTt3yb5K_vH"
        ),
        {
          loading: "Sending your message...",
          success: "Thanks! Your message was sent successfully.",
          error: "Oops! Something went wrong. Please try again.",
        }
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      });
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <DraggableCard id="contact-title" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400">
            Let's discuss your next project
          </p>
        </DraggableCard>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info Card */}
          <DraggableCard id="contact-info" className="premium-card z-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {/* Mail */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p
                    className="text-white font-semibold cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "mailto:muthuhariharan2001@gmail.com")
                    }
                  >
                    muthuhariharan2001@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-semibold">Chennai, Tamilnadu</p>
                </div>
              </div>

              {/* Available for */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-400">Available for</p>
                  <p className="text-white font-semibold">Freelance Projects</p>
                </div>
              </div>
            </div>
          </DraggableCard>

          {/* Contact Form Card */}
          <DraggableCard id="contact-form" className="premium-card z-10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-white bg-white/10 border border-white/30 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-500"
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-white bg-white/10 border border-white/30 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-500"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="text-white bg-white/10 border border-white/30 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-royal-500"
              />

              <Button
                type="submit"
                className="w-full bg-royal-600 hover:bg-royal-700 text-white py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </Button>
            </form>
          </DraggableCard>
        </div>

        {/* Full Width Map Below the Cards */}
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.12534991925!2d80.0150759748424!3d13.027688687292885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b753cbfbe0f%3A0x2b8c3636552ff29d!2sAmaravati%20Residency%20(Guest%20House)%20Saveetha%20University!5e0!3m2!1sen!2sin!4v1751382897902!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen
            style={{ border: 0 }}
            loading="lazy"
            title="Google Map Embed of current Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
