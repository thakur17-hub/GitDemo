from selenium import webdriver
import time


driver=webdriver.Chrome(executable_path="C:/Users/z0042dtx/PycharmProjects/drivers/chromedriver.exe")
driver.get("https://rahulshettyacademy.com/seleniumPractise/#/")
driver.maximize_window()
driver.implicitly_wait(7)
Title=driver.find_element_by_xpath("//div[@class='brand greenLogo']").text
if Title == "GREENKART":
    ElementCount=len(driver.find_elements_by_xpath("//div[@class='products']/div"))
    buttons=driver.find_elements_by_xpath("//div[@class='product-action']/button")
    for i in range(0,5):
        a=buttons.__getitem__(i)
        a.click()
    driver.find_element_by_xpath("//img[@alt='Cart']").click()
    time.sleep(2)
    driver.find_element_by_xpath("//div[@class='action-block']/button").click()
    time.sleep(4)
    driver.find_element_by_xpath("//input[@placeholder='Enter promo code']").send_keys("rahulshettyacademy")

    driver.find_element_by_xpath("//button[@class='promoBtn']").click()
    TextData=driver.find_element_by_xpath("//span[@class='promoInfo']").text
    print(TextData)









