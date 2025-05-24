import React, { useState } from "react";
import { motion } from "framer-motion";
import { uploadNews } from "../api/news";

const NewsUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    coverPhoto: null,
    fbLink: "",
  });
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        coverPhoto: file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formPayload = new FormData();
      formPayload.append('title', formData.title);
      formPayload.append('description', formData.description);
      formPayload.append('image', formData.coverPhoto);
      formPayload.append('fbLink', formData.fbLink);

      await uploadNews(formPayload);
      
      // Reset form after successful upload
      setFormData({
        title: "",
        description: "",
        coverPhoto: null,
        fbLink: "",
      });
      setPreview(null);

      // Show success message
      alert('News uploaded successfully!');
    } catch (err) {
      setError(err.message || 'Failed to upload news');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8 max-w-3xl"
    >
      <h1 className="text-3xl font-bold text-primary mb-8">Upload News</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Cover Photo Upload */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cover Photo</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input file-input-bordered file-input-primary w-full"
            required
          />
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-60 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Title Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter news title"
            className="input input-bordered input-primary w-full"
            required
          />
        </div>

        {/* Description Input */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter news description"
            className="textarea textarea-bordered textarea-primary h-32"
            required
          />
        </div>

        {/* Facebook Embedded Link */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Facebook Embedded Link</span>
          </label>
          <input
            type="url"
            name="fbLink"
            value={formData.fbLink}
            onChange={handleInputChange}
            placeholder="Enter Facebook post URL"
            className="input input-bordered input-primary w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-primary w-full"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner"></span>
              Uploading...
            </>
          ) : (
            'Upload News'
          )}
        </motion.button>

        {/* Error Message */}
        {error && (
          <div className="alert alert-error mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default NewsUpload;
