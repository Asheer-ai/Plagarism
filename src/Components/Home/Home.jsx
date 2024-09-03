import React, { useState, useEffect } from 'react';
import './HomePage.css';

const Home = () => {
    const features = [
        "Leonardo_Phoenix_A_futuristic_highcontrast_illustration_of_Pla_0.jpg",
        "Leonardo_Phoenix_A_futuristic_highcontrast_illustration_of_Pla_2.jpg",
        "Leonardo_Phoenix_A_futuristic_highcontrast_illustration_of_Pla_3.jpg",
        "Leonardo_Phoenix_A_futuristic_highcontrast_illustration_of_Pla_1.jpg"
    ];

    const [currentImages, setCurrentImages] = useState(features);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImages(prevImages => {
                const newImages = [...prevImages];
                newImages.push(newImages.shift()); // Rotate images
                return newImages;
            });
        }, 3000); // Change images every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            <header className="header">
                <h1>Make the Grade With Our Plagiarism Checker</h1>
                <p>Your ideas are unique, and your writing should reflect that. Our plagiarism detection and AI writing assistance make it easy to express your thoughts in a way that's clear, original, and full of academic integrity.</p>
            </header>

            <section className="features">
                {currentImages.map((img, index) => (
                    <div key={index} className="feature">
                        <img src={img} alt={`Feature ${index + 1}`} />
                    </div>
                ))}
            </section>

            <section className="plagiarism-info">
                <img src="Designer.png" alt="Plagiarism Design" /> {/* Add your image path here */}
                <div className="text">
                    <h2>Why Plagiarism Matters</h2>
                    <p>Plagiarism is more than just copying someone else’s work; it’s a serious offense that can damage your credibility and career. With the increasing availability of content online, it’s easier than ever to unintentionally plagiarize. Our plagiarism checker helps you avoid these risks by scanning your work for similarities with billions of web pages, academic papers, and articles.</p>
                    
                    <h3>How Our Tool Helps You</h3>
                    <ul>
                        <li>Maintain Academic Integrity: Ensure that your work is original and properly cited.</li>
                        <li>Improve Your Writing: Receive AI-powered suggestions to rephrase or improve sections that are flagged as similar.</li>
                        <li>Stay Ahead: Instantly receive a detailed report on the originality of your work, allowing you to make necessary revisions.</li>
                    </ul>

                    <p>Using our plagiarism checker is not just about avoiding penalties; it’s about producing high-quality, authentic content that reflects your own unique ideas. Whether you're writing an academic paper, a blog post, or any type of content, you can rely on us to safeguard your originality and help you shine with confidence.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
