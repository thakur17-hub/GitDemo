from selenium import webdriver
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
#from selenium.webdriver.support import expected_conjditions

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/angularpractice/")
driver.maximize_window()
driver.find_element_by_link_text("Shop").click()
products=driver.find_elements_by_xpath("//div[@class='card h-100']")
for product in products:
    productname= product.find_element_by_xpath("div/h4/a").text
    if productname == "Blackberry":
        product.find_element_by_xpath("div/button").click()


driver.get_screenshot_as_file("screen.png")
driver.find_element_by_xpath("//a[@class='btn-primary']").click()

driver.find_element_by_xpath("//button[@class='btn-success']").click()



