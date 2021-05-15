from selenium import webdriver
import time
count=0;


driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/AutomationPractice/")
driver.maximize_window()
checkboxes=driver.find_elements_by_xpath("//input[@type='checkbox']")
print(len(checkboxes))
for chk in checkboxes:
    chk.click()
    if chk.is_selected() == True:
        count = count+1
print(count)














