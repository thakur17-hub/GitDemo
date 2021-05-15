from selenium import webdriver
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions

mylist=[]
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
    Amount=driver.find_elements_by_xpath("//tr/td[5]/p")
    sum=0
    for amt in Amount:
        sum = sum+int(amt.text)

    TotalAmt=int(driver.find_element_by_xpath("//span[@class='totAmt']").text)
    assert TotalAmt == sum
    print("verfied total amount")


