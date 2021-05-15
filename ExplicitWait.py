from selenium import webdriver
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions


driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/seleniumPractise/#/")
driver.maximize_window()

Title=driver.find_element_by_xpath("//div[@class='brand greenLogo']").text
if Title == "GREENKART":
    ElementCount=len(driver.find_elements_by_xpath("//div[@class='products']/div"))
    buttons=driver.find_elements_by_xpath("//div[@class='product-action']/button")
    for i in range(0,5):
        a=buttons.__getitem__(i)
        a.click()
    driver.find_element_by_xpath("//img[@alt='Cart']").click()
    driver.find_element_by_xpath("//div[@class='action-block']/button").click()
    wait=WebDriverWait(driver,8)
    wait.until(expected_conditions.presence_of_element_located((By.CLASS_NAME,"promoCode")))
    driver.find_element_by_xpath("//input[@placeholder='Enter promo code']").send_keys("rahulshettyacademy")
    driver.find_element_by_xpath("//button[@class='promoBtn']").click()
    wait.until(expected_conditions.presence_of_element_located((By.CLASS_NAME,"promoInfo")))
    TextData=driver.find_element_by_xpath("//span[@class='promoInfo']").text
    print(TextData)









