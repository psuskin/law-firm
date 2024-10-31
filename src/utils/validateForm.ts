interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

interface ValidationErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export const validateForm = (formData: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};

    // First Name Validation
    if (!formData.firstName.trim()) {
        errors.firstName = "First name is required";
    } else if (formData.firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters";
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters";
    }

    // Email Validation
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        errors.email = "Invalid email address";
    }

    // Phone Validation
    if (!formData.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (formData.phone.length < 6) {
        errors.phone = "Please enter a valid phone number";
    }

    // Message Validation
    if (!formData.message.trim()) {
        errors.message = "Message is required";
    } else if (formData.message.length < 10) {
        errors.message = "Message must be at least 10 characters";
    }

    return errors;
};


export const hasErrors = (errors: ValidationErrors): boolean => {
    return Object.keys(errors).length > 0;
};

// Helper function to check if all required fields are filled
export const isFormFilled = (formData: FormData): boolean => {
    return Object.values(formData).every(value => value.trim() !== '');
};

export type { FormData, ValidationErrors };
