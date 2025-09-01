import { useState } from "react";
// ✅ Removed useNavigate import since we're using state-based navigation
import * as XLSX from "xlsx"; // ✅ Excel library
import backgroundImage from "../assets/backgroundimage2.jpg";

function LoginCard({ onLoginSuccess }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 3) return "Name must be at least 3 characters long";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return;
    }

    setErrors({ name: "", email: "" });
    setIsSubmitted(true);

    // alert("🎉 Form submitted successfully!");

    setTimeout(() => {
      onLoginSuccess(formData);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "" });
    setErrors({ name: "", email: "" });
    setIsSubmitted(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 uppercase text-green-500">
            Kite Festival
          </h1>
          <p className="text-gray-600">Please sign in to your account</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="uppercase w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:ring-4 focus:ring-blue-200"
          >
            submit
          </button>
        </div>

        {isSubmitted && (
          <div className="mt-4 text-center">
            <button
              onClick={handleReset}
              className="text-sm text-gray-600 hover:text-blue-600 underline"
            >
              Reset Form
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default LoginCard;