package com.ews.ewsdashboard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.ui.Model;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class WebController {
    
    /**@GetMapping("/login")
    public String getLoginPage(Model model) {
        return "/login";
    }

    @GetMapping("/login-error")
    public String getLoginErrorPage(@RequestParam String errMessage, Model model) {
        model.addAttribute("errMessage", errMessage);
        return "/login";
    }

    @GetMapping("/welcome")
    public String getDashboard(@RequestParam String username, @RequestParam String password, Model model) {
        String existingUsername = "altpaynet";
        String existingPassword = "admin12345";

        if (!username.equals(existingUsername) || !password.equals(existingPassword)) {
            return "redirect:/login-error?errMessage=Invalid Credentials";
        }
        model.addAttribute("username", username);
        return "dashboard";
    }**/

    @RequestMapping("/dashboard")
    public String getDashboardPage() {
        return "dashboard";
    }
}
