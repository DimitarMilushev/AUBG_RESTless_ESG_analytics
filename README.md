# Project Name: ESG Analytica

## Overview
ESG Analytica is a cutting-edge application designed to revolutionize the way companies understand and act upon Environmental, Social, and Governance (ESG) reports. By leveraging advanced data analysis techniques and AI, our app provides personalized predictions on a company's future performance, sustainability practices, and governance, making it an indispensable tool for businesses aiming to thrive in today's eco-conscious market.

## Features
- **ESG Report Analysis:** Automated analysis of ESG reports to extract crucial data points and insights.
- **Industry Benchmarking:** Compares company reports with peers in the same industry, size, and operational geography to provide a competitive analysis.
- **AI-Powered Predictions:** Utilizes an AI model to forecast future company performance based on ESG factors and external regulations.
- **Interactive Dashboard:** An Angular single-page application (SPA) offering a dynamic and user-friendly interface to interact with the analysis results.

## Architecture
The application is built on a microservices architecture, ensuring scalability, flexibility, and ease of maintenance.

- **API Gateway:** Serves as the entry point for all client requests, directing them to the appropriate service.
- **Analysis Data Service:** Developed with Spring Boot, this service processes ESG reports, conducts comparisons, and feeds data to the AI model for prediction. It uses MongoDB for efficient data storage and retrieval.
- **Frontend:** Developed with Angular for a seamless SPA experience, enabling interactive data visualization.
- **AI Model Integration (Future):** Plans to integrate a sophisticated AI model for enhanced prediction accuracy.

## Technologies Used
- Backend: Spring Boot for microservices, MongoDB for database
- Frontend: Angular for SPA
- AI/ML: Future integration for data processing and prediction

## Getting Started
Here's how you can set up ESG Insight for development and testing:

1. **Prerequisites**
    - Ensure you have Node.js and Angular CLI installed for frontend development.
    - Java and MongoDB installed for backend services.

2. **Installation**
    - Clone the repo: `git clone https://github.com/yourgithub/esg-insight.git`
    - For frontend setup: Navigate to the `frontend` directory and run `npm install` followed by `ng serve` for a dev server.
    - For backend services: Navigate to each service directory, ensure MongoDB is running, and follow the README.md instructions for setting up Spring Boot applications.
      (Alternatively you could navigate to the microservice's folder and run first `mvn clean install`and then `mvn spring-boot:run` for each microservice)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/DimitarMilushev/RESTless-ESG-analytics/blob/main/LICENSE) file for details.
