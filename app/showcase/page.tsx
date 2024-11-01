"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { LoaderCircle } from "lucide-react";

export default function Showcase() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // State for input fields
  const [projectUrl, setProjectUrl] = useState("");
  const [description, setDescription] = useState("");
  const [fromName, setFromName] = useState(""); // To capture the submitter's name
  const [errorMessage, setErrorMessage] = useState(""); // To handle error messages
  const [successMessage, setSuccessMessage] = useState(""); // To show success message

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: fromName,
      project_url: projectUrl,
      description: description,
    };

    // Send the email
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.EMAILJS_USER_ID!
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMessage("Your project has been submitted successfully!");
        setProjectUrl(""); // Reset form fields
        setDescription("");
        setFromName("");
        setErrorMessage(""); // Clear any previous error message

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setErrorMessage("Failed to send email. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen container mt-[4rem] bg-background flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <Link href={"/docs"} className="group">
              <span className="text-sm hover:text-primary text-muted-foreground transition duration-200">
                Explore Kaif UI →
              </span>
            </Link>
          </div>
          <h1 className="text-4xl font-medium tracking-tight">
            Showcasing Projects Built with Kaif UI Submit Yours!
          </h1>
          <p className="text-sm text-muted-foreground">
            Showcasing innovative designs that people craft with Kaif UI.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-sm">
                1
              </span>
              <label className="text-sm">Your Name</label>
            </div>
            <Input
              type="text"
              placeholder="Your Name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-sm">
                2
              </span>
              <label className="text-sm">Project URL</label>
            </div>
            <Input
              type="url"
              placeholder="https://myproject.com"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              required
            />
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-sm">
                3
              </span>
              <label className="text-sm">Briefly Describe what you built</label>
            </div>
            <Textarea
              placeholder="Describe your project, its features, and how Kaif UI enhanced it..."
              className="min-h-[100px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <Button
            className="w-full py-6"
            disabled={isLoading}
            size="lg"
            type="submit"
          >
            {isLoading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />   
            )}
            Showcase my project →
          </Button>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
}
