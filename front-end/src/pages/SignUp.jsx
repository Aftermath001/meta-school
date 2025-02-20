import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User signed up:", formData);
  };

  return (
    <div className="flex min-h-screen bg-[#1E1B29] text-white">
      {/* Left Section - Image */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 p-8 bg-gradient-to-b from-[#342D49] to-[#1E1B29] rounded-r-3xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-wide">AMU</h1>
          <button className="text-sm text-gray-300 flex items-center gap-2 bg-[#2D253B] px-4 py-2 rounded-lg">
            Back to website →
          </button>
        </div>
        <div className="text-center">
          <img src="/signup-image.jpg" alt="Signup" className="rounded-lg" />
          <h2 className="mt-6 text-xl font-semibold">
            Capturing Moments, Creating Memories
          </h2>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4">Create an account</h2>
          <p className="text-gray-400 mb-6">
            Already have an account?{" "}
            <a href="/login" className="text-purple-400 hover:underline">
              Log in
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="flex space-x-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 bg-[#2D253B] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 bg-[#2D253B] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-[#2D253B] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Password Field */}
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-[#2D253B] border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2 accent-purple-500"
              />
              <label className="text-sm text-gray-400">
                I agree to the{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Create account
            </button>
          </form>

          {/* Or Register with */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 mb-3">Or register with</p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg bg-[#2D253B] hover:bg-gray-700">
                <FaGoogle className="text-lg" /> Google
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg bg-[#2D253B] hover:bg-gray-700">
                <FaApple className="text-lg" /> Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
