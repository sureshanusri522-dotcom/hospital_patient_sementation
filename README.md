Hospital Patient Segmentation Using Machine Learning

An AI-powered healthcare application that uses K-Means Clustering to segment patients into similar groups and Random Forest Classification to predict the cluster of new patients through a Flask web application.

📌 Project Overview

Hospitals generate large amounts of patient data, including demographic information, medical conditions, admission details, test results, and billing information. Manually analyzing this data can be time-consuming.

This project provides a machine-learning-based solution to:

Analyze patient healthcare data
Group similar patients using K-Means Clustering
Predict the cluster of a new patient using Random Forest
Provide an interactive Flask web interface
Display patient insights and recommendations
🎯 Objectives
Perform healthcare data preprocessing.
Analyze relationships between patient features.
Segment patients using K-Means Clustering.
Determine the optimal number of clusters using the Elbow Method.
Train a Random Forest Classifier using generated cluster labels.
Deploy the trained model through Flask.
Provide an attractive and user-friendly healthcare dashboard.
📊 Dataset Features

The application uses healthcare patient information such as:

Age
Gender
Blood Type
Medical Condition
Admission Type
Test Results
Billing Amount

🔄 Project Workflow

Healthcare Dataset

       ↓

Data Cleaning

       ↓

Label Encoding

       ↓


Feature Scaling

       ↓

Exploratory Data Analysis

       ↓

  Elbow Method
  
       ↓

K-Means Clustering

       ↓

Generate Cluster Labels

       ↓

Random Forest Classification

       ↓

Save Trained Model

       ↓

Flask Web Application

       ↓

New Patient Prediction


🤖 Machine Learning Models
1. K-Means Clustering

K-Means is used as the primary unsupervised learning algorithm to group patients with similar characteristics.

The Elbow Method is used to identify the appropriate number of clusters.

2. Random Forest Classification

K-Means generates cluster labels for the existing patient data. These labels are then used as target classes for the Random Forest model.

Random Forest is used because the Flask application needs to predict the cluster of a new patient.

📈 Exploratory Data Analysis

The project includes:

Correlation Matrix
Elbow Method
PCA/Scatter Plot
Cluster visualization

These visualizations help understand the dataset and the resulting patient groups.

🌐 Web Application

The Flask application provides:

Patient input form
Patient cluster prediction
Risk-level display
Healthcare recommendation
Interactive dashboard
Responsive interface
Dark-mode interface
Animated UI elements
🛠️ Technologies Used
Technology	Purpose
Python	Programming
Pandas	Data processing
NumPy	Numerical operations
Scikit-learn	Machine Learning
Flask	Web application
HTML	Frontend structure
CSS	UI design
JavaScript	Frontend interactions
VS Code	Development environment

📁 Project Structure

Hospital-Patient-Segmentation/

│

├── app.py

├── train_model.py

├── healthcare_dataset.csv

├── model.pkl

├── scaler.pkl

├── encoder.pkl

├── requirements.txt

├── README.md

│

├── templates/

│   └── index.html

│

└── static/

    ├── style.css
    ├── script.js
    └── hospital.jpg
