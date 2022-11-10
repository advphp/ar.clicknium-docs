---
sidebar_position: 6
sidebar_label: IA Automation 
---
# أتمتة IA 
## ملخق

تعتمد أتمتة كلكينيوم IA على Microsoft Active Accessibility (MSAA) ، وتزويد وظيفة التسجيل ، وإنشاء محدد المواقع وجميع العمليات على عنصر واحد.
نظرًا لأن MSAA يعتبر الآن واجهة برمجة تطبيقات قديمة ، لذلك نتعامل مع IA كمكمل لـ UIA ، في بعض تطبيقات الإلكترون و CEF أو بعض التطبيقات القديمة ، يمكن أن يكون IA أفضل. إذا كنت ترغب في استخدام IA أثناء التسجيل ، فأنت بحاجة إلى اختيار تقنية IA يدويًا أولاً.

## سمات المحدد (Locator attributes)
يمكنك الحصول على مفهوم  [المحدد](./locator.md) أولاً ، بالنسبة لأتمتة IA ، فإن السمات المحددة هي كما يلي:

| Name      | equals | contains |startWith |endWith |regex |
| ----------- | ----------- |----------- |----------- |----------- |----------- |
| Name |  <font color="Green"><B>Yes</B></font>   |<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|
| ClassName |  <font color="Green"><B>Yes</B></font>   |<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|
| HelpText |  <font color="Green"><B>Yes</B></font>   |<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|
| AccessKey |  <font color="Green"><B>Yes</B></font>   |<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|
| DefaultAction |  <font color="Green"><B>Yes</B></font>   |<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|
| Description |  <font color="Green"><B>Yes</B></font>   |<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|<font color="Green"><B>Yes</B></font>|
| Role |  <font color="Green"><B>Yes</B></font>   |<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|
| IsDirectChild |  <font color="Green"><B>Yes</B></font>   |<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|
| Tag |  <font color="Green"><B>Yes</B></font>   |<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|
| Index |  <font color="Green"><B>Yes</B></font>   |<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|<font color="Red"><B>No</B></font>|

## عينات المحدد (Locator)

- github desktop 'open in visual studio code' button
```xml
<Application processName="GitHubDesktop" filePath="GitHubDesktop.exe" version="1.3" />
<IA className="Chrome_WidgetWin_1" isDirectChild="True" name="GitHub Desktop" role="window" />
<IA role="document" />
<IA defaultAction="click" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" index="2" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" index="2" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA className="Chrome_WidgetWin_1" defaultAction="press" name="Open in Visual Studio Code" />
```
- github desktop commit 'description` edit
```xml
<Application processName="GitHubDesktop" filePath="GitHubDesktop.exe" version="1.3" />
<IA className="Chrome_WidgetWin_1" isDirectChild="True" name="GitHub Desktop" role="window" />
<IA role="document" />
<IA defaultAction="click" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" index="2" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" index="2" isDirectChild="True" role="group" />
<IA defaultAction="click" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" name="Create commit" role="group" />
<IA defaultAction="click" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA className="Chrome_WidgetWin_1" defaultAction="activate" name="Description" role="edit" />
```
- github desktop 'history' tabitem
```xml
<Application processName="GitHubDesktop" filePath="GitHubDesktop.exe" version="1.3" />
<IA className="Chrome_WidgetWin_1" isDirectChild="True" name="GitHub Desktop" role="window" />
<IA role="document" />
<IA defaultAction="click" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" index="2" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" index="2" isDirectChild="True" role="group" />
<IA defaultAction="click" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="group" />
<IA defaultAction="click ancestor" isDirectChild="True" role="tab" />
<IA className="Chrome_WidgetWin_1" defaultAction="click" name="History" role="tabItem" />
```

## خصائص عنصر IA
من خلال [find_element](../references/python/globalfunctions/find_element.md)  على محدد موقع IA واحد ، يمكنك الحصول على عنصر IA واحد ، يمكنك الحصول على خصائص العنصر عن طريق [get_property](../references/python/uielement/get_property.md)، يدعم كلكينيوم IA الخصائص التالية:


| الاسم      | الوصف |
| ----------- | ----------- |
| Name      |  اسم واجهة المستخدم      |
| IsEnabled  | ما إذا كان العنصر ممكّنًا في واجهة المستخدم|
| AccessKey   |  سلسلة تحتوي على مفتاح الوصول للعنصر|
| BoundingRectangle   | إحداثيات المستطيل الذي يحيط بالعنصر بالكامل|
| ProcessId   | معرف العملية (ID) للعنصر|
| Description   |  وصف العنصر|
| AcceleratorKey   | سلسلة تحتوي على مجموعات مفاتيح التسريع للعنصر|
| HelpText   |نص التعليمات الخاص بالعنصر|
| ControlType | نوع التحكم للعنصر.|
