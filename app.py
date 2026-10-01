from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# ==========================
# Load Saved Files
# ==========================

model = pickle.load(open("model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))
encoders = pickle.load(open("encoder.pkl", "rb"))

# ==========================
# Home Page
# ==========================

@app.route("/")
def home():
    return render_template("index.html")

# ==========================
# Prediction
# ==========================

@app.route("/predict", methods=["POST"])
def predict():

    age = int(request.form["Age"])
    gender = request.form["Gender"]
    blood = request.form["Blood"]
    condition = request.form["Condition"]
    billing = float(request.form["Billing"])
    admission = request.form["Admission"]
    test = request.form["Test"]

    gender = encoders["Gender"].transform([gender])[0]
    blood = encoders["Blood Type"].transform([blood])[0]
    condition = encoders["Medical Condition"].transform([condition])[0]
    admission = encoders["Admission Type"].transform([admission])[0]
    test = encoders["Test Results"].transform([test])[0]

    patient = np.array([[
        age,
        gender,
        blood,
        condition,
        billing,
        admission,
        test
    ]])

    patient = scaler.transform(patient)

    cluster = model.predict(patient)[0]

    # ==========================
    # Cluster Description
    # ==========================

    if cluster == 0:
        risk = "🟢 Low Risk Patient"
        advice = "Regular health check-up is recommended."
        color = "green"

    elif cluster == 1:
        risk = "🟡 Moderate Risk Patient"
        advice = "Requires periodic monitoring and follow-up."
        color = "orange"

    elif cluster == 2:
        risk = "🟠 High Risk Patient"
        advice = "Doctor consultation is recommended."
        color = "darkorange"

    else:
        risk = "🔴 Critical Patient"
        advice = "Immediate medical attention is required."
        color = "red"

    return render_template(
        "index.html",
        prediction=cluster,
        risk=risk,
        advice=advice,
        color=color
    )

# ==========================

if __name__ == "__main__":
    app.run(debug=True)