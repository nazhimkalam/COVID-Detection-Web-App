# # Serving the lung cancer detection modal

# ### Importing libraries

# In[2]:


import glob
import os
import re
import sys

import cv2
import numpy as np
import tensorflow as tf
from flask import Flask, redirect, render_template, request, url_for
from flask_cors import CORS
from keras.applications.vgg16 import preprocess_input
from keras.models import load_model
from keras.preprocessing import image
from werkzeug.utils import secure_filename

# ### Defining the flask app

# In[3]:


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

# ### Loading your saved modal

# In[4]:


MODEL_PATH = "covid19_xray_resnet_50.h5"
model = tf.keras.models.load_model('covid19_xray_resnet_50.h5')
print('Model loaded. Check http://127.0.0.1:5000/ or http://localhost:5000/')


# ### Predict using the model

# In[5]:


def model_predict(img_path, model):
    IMG_SIZE = 224
    img_array = cv2.imread(img_path)
    new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE), 3)
    new_array = new_array.reshape(1, 224, 224, 3)
    prediction = model.predict([new_array])
    return prediction


# ### Defining the index route

# In[6]:


@app.route('/', methods=['GET'])
def index():
    # Main page
    # return render_template('index.html')
    print("Hello World!!")
    return "Hello World"


# ### Defining the predict route

# In[7]:


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        print(request)
        print(request.files)
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join( basepath, 'uploads', secure_filename(f.filename) )
        f.save(file_path)

        # Make prediction
        prediction = model_predict(file_path, model)

        # These are the prediction categories 
        CATEGORIES = ['COVID-19', 'NORMAL']
        
        # getting the prediction result from the categories
        result = CATEGORIES[int(round(prediction[0][0]))]
        
        # returning the result
        return result
    
    # if not a 'POST' request we then return None
    return None


# ### Running the main application

# In[9]:


if __name__ == '__main__':
    app.run(port=5000, debug=True)

  




