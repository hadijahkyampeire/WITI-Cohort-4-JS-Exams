# WITI-Cohort-4-JS-Quiz-1

### **Section A: Multiple Choice & True/False (1 mark each)**

#### Multiple Choice (1–6):

1. **C)** `document.getElementById("myId")`  

2. **B)** Sets the inner HTML of the element with id="title" to "Hello, <b>World!</b>", showing **World!** in bold  

3. **C)** `document.getElementById("box").style.backgroundColor = "red";`  

4. **C)** `2names` *(variable names can't start with a number)*  

5. **B)** `82` *(string + number results in string concatenation)*  

6. **B)** `"object"` *(quirk of JavaScript: `typeof null` returns `"object"`)  

#### True/False (7–10):

7. **A)** True  

8. **A)** True  

9. **B)** False *(`let` cannot be redeclared in the same scope)*  

10. **A)** True *(JavaScript follows BIDMAS/BODMAS)*

---

### **Section B: Short Answer (5 marks)**

11. **Function `greet`**  
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}
```

12. **Printed output:**  
`Not Equal`  
*(Strict comparison `===` checks both value and type, so `5 === "5"` is false)*

13. **Difference between `let`, `var`, and `const`:**  
- `var`: Function scope, can be redeclared.  
- `let`: Block scope, cannot be redeclared.  
- `const`: Same as `let` but also cannot be reassigned.
