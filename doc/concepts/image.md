---
sidebar_position: 7
sidebar_label: Image Automation
---
# أتمتة الصور Image Automation

## ملخص
تدعم وظيفة أتمتة كلكينيوم مع العديد من الوظائف التي تدعم أتمتة الصور.
تم تصميم مخطط محدد موقع كلكينيوم للتمديد في محدد مواقع برامج الويندوز ومحدد موقع برامج Java ومحدد موقع الصور. (locator)

## التقاط موقع صورة محدد Capture image locator
افتح مشروعا في Visual Studio Code بالضغط على `Ctrl + F10`، أو النقر فوق الزر `Capture` لاستدعاء مسجل كلكينيوم.
![recorder button](./../img/start_recorder_from_vscode.png "زر مسجل الموقع")  

- مرر مؤشر الماوس فوق العنصر لتحديده.   
- اضغط على `Ctrl` وانقر على العنصر لالتقاط محدد موقعه.  
- اضغط على `Shift` وحدد منطقة واحدة بالماوس لالتقاط الصورة وسيتم تخزينها كصورة في محدد المواقع. 

![recorder helper](./../img/recorder_help.png)   

فمثلا 
- اختر العنصر الهدف

![recorder sample1](./../img/image_locator_sample1_1.png)  
- اضغط على `Shift` واسحب لتحديد منطقة  

![recorder sample1](./../img/image_locator_sample1_2.png)  

سوف تحصل على محدد المواقع على النحو التالي:   
![recorder sample1](./../img/image_locator_sample1_3.png)  

يحتوي محدد الصورة على جزأين.
الجزء الأول هو عنصر الارتساء. في عملية التشغيل ، ابحث أولاً عن عنصر الارتساء ، ثم التقط صورة المرساة اعتمادًا على سمات طريقة الصورة ، وابحث عن الصورة المستهدفة في صورة الإرساء عن طريق خوارزمية مطابقة الصورة.
الجزء الثاني عبارة عن صورة تدعم السمات (attributes) التالية:  

| الاسم      | الوصف | يساوي | يحتوي |أبدا ب |انتهت ب |
| ----------- | ----------- |----------- |----------- |----------- |----------- |
| accuracy | الحد الأدنى من التشابه بين الصورة المستهدفة والصورة الموجودة في محدد الصورة. يكون مفيدًا عندما تكون الصورة التي يتم العثور عليها مختلفة قليلاً عن تلك الموجودة في محدد المواقع. وحدة القياس من 0 إلى 1 بقيمة افتراضية 0.75. |<font color="Green"><B>نعم</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|
| dpi |  نوصي بأن تكون إعدادات DPI لنظام التشغيل ويندوز في عملية التشغيل هي نفس الإعدادات عند التسجيل|<font color="Green"><B>نعم</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|
| method | تحدد قيم التعداد خوارزمية مطابقة الصورة. يتم ضبط القيمة تلقائيًا عند التسجيل | <font color="Green"><B>نعم</B></font> |<font color="Red"><B>لا</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|
| filePath | منطقة اختيار تسجيل الصور ، المستخدمة في عملية مطابقة الصور |<font color="Green"><B>نعم</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|
| matchIndex | والتي سيتم تحديدها عند العثور على أكثر من منطقة واحدة أثناء مطابقة الصورة ، الافتراضي هو 0 ، وهذا يعني منطقة المطابقة الأولى |<font color="Green"><B>نعم</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|
| elementRect | قم بتخزين منطقة عنصر الربط أثناء التسجيل. لا حاجة لتعديل القيمة |<font color="Green"><B>نعم</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|
| selectionRect | تخزين منطقة الاختيار أثناء التسجيل. لا حاجة لتعديل القيمة  |<font color="Green"><B>نعم</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|
| timeout | حدد الحد الأقصى للفاصل الزمني في مطابقة الصورة ، الافتراضي هو 5000 مللي ثانية |<font color="Green"><B>نعم</B></font>   |<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|<font color="Red"><B>لا</B></font>|

the definition of methods:
- HighestAccuracy: compare the images found in whole Windows screen
- InRegionHighestAccuracy: compare the images found in anchor element area
- OutRegionHighestAccuracy: comapre the images found out of the anchor element area

`method` attributes are automatically set based on the selection area and corresponding anchor area in the process of recording 
if the selection area is inside the anchor element area, set to 'InRegionHighestAccuracy';  
if the selection area intersects with the anchor element area, set to 'HighestAccuracy';
if the selection area is outside the anchor element area, set to 'OutRegionHighestAccuracy';

## Use image locator in project
Image locator can be used in the same way as other locators, for example  
```python
from clicknium import clicknium as cc, locator, ui


#open new browser window
driver = cc.chrome.open("https://www.bing.com")
driver.find_element(locator.chrome.img1).click

ui(locator.notepad.menuitem).click()
```  

The following functions support image locator:
- click
- double_click
- mouse_up
- mouse_down
- drag_drop
- get_position
- get_size
- highlight
- hover
- send_hotkey
- set_text (parameter `by` should be `sendkey-after-click`)

## Example
If the application or the target UI element can not be located by other automation technologies when the area image is stable, users can try image locator.
