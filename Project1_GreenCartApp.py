from selenium import webdriver
import time

from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions

Mylist=[]
list2=[]

driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/seleniumPractise/#/")
driver.maximize_window()

Title=driver.find_element_by_xpath("//div[@class='brand greenLogo']").text
if Title == "GREENKART":
    ElementCount=len(driver.find_elements_by_xpath("//div[@class='products']/div"))
    buttons=driver.find_elements_by_xpath("//div[@class='product-action']/button")
    for i in range(0,3):
        a=buttons.__getitem__(i)
        Mylist.append(a.find_element_by_xpath("parent::div/parent::div/h4").text)
        a.click()
    print(len(Mylist))
    driver.find_element_by_xpath("//img[@alt='Cart']").click()
    driver.find_element_by_xpath("//div[@class='action-block']/button").click()
    wait = WebDriverWait(driver, 8)
    wait.until(expected_conditions.presence_of_element_located((By.CLASS_NAME, "promoCode")))

    VegName=driver.find_elements_by_xpath("//p[@class='product-name']")
    for veggies in VegName:
        list2.append(veggies.text)

    if Mylist==list2:
        print("list matched")
    originalamount= driver.find_element_by_xpath("//span[@class='discountAmt']").text
    driver.find_element_by_xpath("//input[@placeholder='Enter promo code']").send_keys("rahulshettyacademy")
    driver.find_element_by_xpath("//button[@class='promoBtn']").click()
    wait.until(expected_conditions.presence_of_element_located((By.CLASS_NAME, "promoInfo")))
    discountamount=driver.find_element_by_xpath("//span[@class='discountAmt']").text

    assert float(discountamount) < int(originalamount)
    print(driver.find_element_by_xpath("//span[@class='promoInfo']").text)
