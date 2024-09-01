import React from 'react';
import './HomePage.css';

const Home = () => {
    return (
        <div className="home-page">
            <header className="header">
                <h1>Make the Grade With Our Plagiarism Checker</h1>
                <p>Your ideas are unique, and your writing should reflect that. Our plagiarism detection and AI writing assistance make it easy to express your thoughts in a way that's clear, original, and full of academic integrity.</p>
            </header>
            <div className="features">
                <div className="feature">
                    <img src="https://static-web.grammarly.com/1e6ajr2k4140/7pAwE66zda13C4mY62UOGm/ec49e0d1f573ffd2e8f63ba9d1744df6/Icons__10_.svg" alt="Instantly find plagiarism" />
                    <h2>Instantly find plagiarism</h2>
                    <p>By pasting or uploading your research paper, essay, or article.</p>
                </div>
                <div className="feature">
                    <img src="https://static-web.grammarly.com/1e6ajr2k4140/7stDUBc1weVniQTpfJwEEr/0530137837fd855da5400464a604a84f/Icons__9_.svg" alt="Check against billions of web pages" />
                    <h2>Check against billions of web pages</h2>
                    <p>Quickly ensure integrity by checking your work against billions of web pages with one click.</p>
                </div>
                <div className="feature">
                    <img src="https://static-web.grammarly.com/1e6ajr2k4140/1FGGJT7zcrpJIaa7Vt20jN/6569df6336abe1782c5f76fba8c67886/ICONS__36_.svg" alt="Get an originality score" />
                    <h2>Get an originality score</h2>
                    <p>See how unique your ideas are with an originality score.</p>
                </div>
                <div className="feature">
                    <img src="https://static-web.grammarly.com/1e6ajr2k4140/5qdeg85pS6fV3yhfAIRPAP/7d797f2230560214c65d8a9441a4a061/ICONS__44_.svg" alt="Receive recommendations" />
                    <h2>Receive recommendations</h2>
                    <p>Speed up work with recommendations on what and how to cite, as well as real-time feedback on your writing.</p>
                </div>
            </div>
            
            {/* New Section */}
            <section className="plagiarism-info">
                <h2>Why Plagiarism Matters</h2>
                <p>Plagiarism is more than just copying someone else’s work; it’s a serious offense that can damage your credibility and career. With the increasing availability of content online, it’s easier than ever to unintentionally plagiarize. Our plagiarism checker helps you avoid these risks by scanning your work for similarities with billions of web pages, academic papers, and articles.</p>
                
                <h3>How Our Tool Helps You</h3>
                <ul>
                    <li>Maintain Academic Integrity: Ensure that your work is original and properly cited.</li>
                    <li>Improve Your Writing: Receive AI-powered suggestions to rephrase or improve sections that are flagged as similar.</li>
                    <li>Stay Ahead: Instantly receive a detailed report on the originality of your work, allowing you to make necessary revisions.</li>
                </ul>

                <p>Using our plagiarism checker is not just about avoiding penalties; it’s about producing high-quality, authentic content that reflects your own unique ideas. Whether you're writing an academic paper, a blog post, or any type of content, you can rely on us to safeguard your originality and help you shine with confidence.</p>
            </section>
        </div>
    );
};

export default Home;
