import { useState } from "react";
import backgroundImage from "../assets/backgroundimage2.jpg";
import { loginUser } from "../api/auth";

function LoginCard({ onLoginSuccess }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (name) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 3) return "Name must be at least 3 characters long";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Enter a valid email address";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({ name: "", email: "" });

      console.log("Submitting form:", formData);
      const data = await loginUser(formData);
      console.log("Login response:", data);
      console.log(loginUser);
      // should log user info

      console.log("Login response:", data);
      localStorage.setItem("user", JSON.stringify(data.user));
      onLoginSuccess(data.user);

    } catch (err) {
      console.error("Login error:", err);
      const message = err?.response?.data?.error || err.message || "Request failed";
      setErrors((prev) => ({ ...prev, email: message }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "" });
    setErrors({ name: "", email: "" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-500 uppercase">We Fly High</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg text-white font-semibold uppercase transition duration-200 transform hover:scale-105 ${
              isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleReset}
            className="text-sm text-gray-600 hover:text-blue-600 underline"
          >
            Reset Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
