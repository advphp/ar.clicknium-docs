---
sidebar_position: 3
---
# Capture Similar Element

Capture similar element can be used to recoder elements with similar properties. A similar locator is intelligently generated based on the captured elements.

- [Start recorder](#start-recorder)
- [Capture wizard](#capture-wizard)
- [Start capture](#start-capture)
- [Clear elements](#clear-elements)
- [Remove element](#remove-element)
- [Cancel capture](#cancel-capture)
- [Recapture](#recapture)

> **Remarks:**
>- Capture similar elements support web capture techlogies without XPath advance option for now.
>- Image capture is not supported for now.


## Start recorder
- Start from Visual Studio Code LOCATORS tab  
![start from vscode local locator](../../../img/start_recorder_from_vscode.png)
- Strat from Visual Studio Code CLOUD LOCATORS tab  
![start from vscode cloud locator](../../../img/start_recorder_from_cloud.png)
- Start with pressing hotkey `Ctrl+F10`  

## Capture wizard  
Click on the `Capture Similar Element` icon, a wizard window will be displayed.
- Capture similar element icon
![capture similar element icon](../../../img/capture_similar_element_icon.png)
- Wizard window
![capture similar element wizard](../../../img/capture_similar_element_wizard.png)


## Start capture

1. Capture first element.  
When mouse moving, it will highlight the UI element. Press `Ctrl+click` to capture element.
Element image and matched elements count will be displayed in the wizard window.
![capture first element](../../../img/capture_first_similar_element.png)

2. Capture another element.
Capture another element in the same way as the first element.
New captured element iamge and matched elements count will be displayed in the wizard window.
![capture another element](../../../img/capture_another_similar_element.png)

3. Save the similar locator.
Click `Save` to save the locator, locator will be added to the locator store tree.

![save similar locator](../../../img/save_similar_locator.png)

## Highlight elements
Highlight all matched elements in the view at once.
- Click the matched elements count button
![highlight similar elements1](../../../img/highlight_similar_elements1.png)
![highlight similar elements2](../../../img/highlight_similar_elements2.png)
## Clear elements
Clear all the elements captured in the wizard window, the `Clear` and `Save` buttons will be disabled.
- Click the `Clear` button
![clear similar elements](../../../img/clear_similar_elements.png)

## Remove element
Remove one captured element in the wizard window.
- Click the `Remove` icon
![remove similar element](../../../img/remove_similar_element.png)

## Cancel capture
Discard the current capture result and return to the main capture window.
- Click the `Cancel` button
![cancel capture similar element](../../../img/cancel_capture_similar_element.png)

## Recapture
Recapture similar element can be used to update your single locator or similar locator.
- Start from Visual Studio Code   
![vscode recapture](../../../img/recorder_recapture_vscode.png)
- Recapture winow   
![recapture window from VSC](../../../img/recapture_window.png)
- Capture similar element icon
![capture similar element icon](../../../img/recapture_similar_element_icon.png)
- [Start capture](#start-capture)