from selenium import webdriver
import time

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/AutomationPractice/")
driver.maximize_window()
driver.find_element_by_id("name").send_keys("ValidateText")
driver.find_element_by_id("alertbtn").click()
alert = driver.switch_to.alert
AlertText = alert.text
assert "ValidateText" in AlertText
alert.accept()
'''
alert.dismiss()
'''