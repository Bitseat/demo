# importing all required libraries
import os
import traceback

# importing libraries for computer vision
import numpy as np
import cv2 
import imutils
from imutils import contours
from imutils.perspective import four_point_transform
from skimage.filters import threshold_local

# importing libraries to read text from image
from PIL import Image
import pytesseract

import re
import json
from docx2pdf import convert

from pyresparser import ResumeParser
import image_text_extractor
from image_text_extractor import image_extract

import subprocess
from os import rename
import shutil
import time

def main():
    # import resumes from directory
    directory = 'resumes/'
    directory3 = 'pdfs/' 
    dir_list = os.listdir(directory)
    dir_list.sort(key=lambda f: os.path.splitext(f)[1], reverse = True)
 

    for filename in dir_list:
        
        if filename.endswith(".pdf"):
            full_path = os.path.join(directory, filename)

            extract_info(full_path)

        elif filename.endswith(".docx"):
            full_path = os.path.join(directory, filename)

            out = subprocess.Popen(['unoconv',  str(full_path)], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            stdout,stderr = out.communicate()
            time.sleep(5)
                
            target_path = os.path.join(os.path.dirname(__file__), str(full_path[:-5]) + ".pdf")

            m = str(target_path).replace('resumes/','pdfs/')
            shutil.move(str(target_path), os.path.join(directory3, str(m)))
            time.sleep(5)
          
            #new_path = str(target_path[:-4]) + ".docx" + ".pdf"

            #rename(target_path, new_path)
             
            extract_info(full_path)
           

        elif filename.endswith(".jpg"):
            full_path = os.path.join(directory, filename)
            x = image_extract()

            out = subprocess.Popen(['unoconv',  str(full_path)], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            stdout,stderr = out.communicate()
            time.sleep(5)
            target_path = os.path.join(os.path.dirname(__file__), str(x) + ".pdf")

            file_name = str(full_path[:-4]) + ".pdf"
            n = file_name.replace('resumes/','')
            shutil.move(os.path.join(directory, str(n)), os.path.join(directory3, str(n)))
            time.sleep(5)
            extract_info(x)

               
        else:
            pass


def extract_info(full_path):
    directory = 'resumes/' 
    directory2 = 'jsons/'
    directory3 = 'pdfs/' 
    data = {}
    with open(full_path, 'r') as f:
        #print(full_path)

        data = ResumeParser(full_path).get_extracted_data()
        time.sleep(5)
        z = full_path.replace('resumes/','')

        json_file_name = str(directory2) + str(z) + ".json"
        
        clean_data = re.sub('\u2013', '', str(data))
        clean_data = re.sub('\uf0b7', '', clean_data)
        clean_data = re.sub('\u200b', '', clean_data)
        clean_data = re.sub(r'\\uf0b7', '', clean_data)
        clean_data = re.sub(r'[^\x00-\x7F]+|\x0c',' ', clean_data)
        clean_data = re.sub(r"'", '"', clean_data)
        clean_data = re.sub(r'None', 'null', clean_data)
        clean_data = json.loads(clean_data.replace("\'", '"'))
        
        jpg_file_name = str(directory2) + str(z[:-5]) + ".json"
        pdf_file_name = str(full_path[:-9]) + ".pdf"
        l = pdf_file_name.replace('resumes/','')
        word_file_name = str(full_path[:-5]) + ".pdf"
        m = word_file_name.replace('resumes/','')
        if full_path.endswith(".jpg.docx"):
            with open(jpg_file_name, 'w') as outfile:
                json.dump(clean_data, outfile)
            #shutil.move(str(pdf_file_name), os.path.join(directory3, str(l)))
            os.remove(full_path)
            os.remove(str(full_path[:-5]))

        elif full_path.endswith(".pdf"):
            with open(json_file_name, 'w') as outfile:
                json.dump(clean_data, outfile)

            shutil.move(os.path.join(directory, str(z)), os.path.join(directory3, str(z)))
            time.sleep(5)

        else:
            with open(json_file_name, 'w') as outfile:
                json.dump(clean_data, outfile)
            os.remove(full_path)


if __name__ == '__main__':
    main()







