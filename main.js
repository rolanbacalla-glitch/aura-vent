/**
 * Aura Vent Ltd - Main JavaScript
 * Handles navigation, scroll effects, mobile interactions, and theme switching.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Management
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.material-symbols-outlined');

    // Load initial theme
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);

    function setTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
            html.classList.remove('light');
            if (themeIcon) themeIcon.textContent = 'light_mode';
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            if (themeIcon) themeIcon.textContent = 'dark_mode';
        }
        localStorage.setItem('theme', theme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = html.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    // 2. Update Copyright Year
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 3. Scroll Awareness for Glassmorphism
    // Scroll-triggered visual shifts disabled to maintain consistent navigation bar aesthetic sitewide.

    // 4. Mobile Menu Logic
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    const openMenu = () => {
        mobileMenu?.classList.remove('translate-x-full');
        document.body.classList.add('overflow-hidden');
    };

    const closeMenu = () => {
        mobileMenu?.classList.add('translate-x-full');
        document.body.classList.remove('overflow-hidden');
    };

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', openMenu);
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMenu);
    }

    // Close menu on link click
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // 5. Consultation Form Handling (Web3Forms API integration)
    const consultationForm = document.getElementById('consultation-form');
    const formResponse = document.getElementById('form-response');

    if (consultationForm && formResponse) {
        consultationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = consultationForm.querySelector('button[type="submit"]');
            const btnSpan = submitBtn?.querySelector('span');
            const originalText = btnSpan ? btnSpan.textContent : 'Request Quote';

            // Disable button & show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                if (btnSpan) btnSpan.textContent = 'Sending Request...';
            }

            // Hide previous response state
            formResponse.className = 'hidden p-4 border font-body-md text-body-md transition-all duration-300';
            formResponse.innerHTML = '';

            try {
                const formData = new FormData(consultationForm);
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                formResponse.classList.remove('hidden');

                if (response.ok) {
                    // Success state styling
                    formResponse.classList.add('bg-primary-container', 'border-primary', 'text-on-primary-container');
                    formResponse.innerHTML = `
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                            <div>
                                <strong class="block font-label-technical text-label-technical uppercase tracking-wider mb-1">Submission Successful</strong>
                                Thank you for requesting a quote. Our specialised engineering team will review your specifications and contact you shortly.
                            </div>
                        </div>
                    `;
                    consultationForm.reset();
                } else {
                    // API returned error state
                    formResponse.classList.add('bg-surface-container-high', 'border-error', 'text-error');
                    formResponse.innerHTML = `
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-error mt-0.5">error</span>
                            <div>
                                <strong class="block font-label-technical text-label-technical uppercase tracking-wider mb-1">Submission Error</strong>
                                ${data.message || 'We could not process your request at this time. Please verify your details or try again later.'}
                            </div>
                        </div>
                    `;
                }
            } catch (error) {
                // Network or runtime error state
                formResponse.classList.remove('hidden');
                formResponse.classList.add('bg-surface-container-high', 'border-error', 'text-error');
                formResponse.innerHTML = `
                    <div class="flex items-start gap-3">
                        <span class="material-symbols-outlined text-error mt-0.5">cloud_off</span>
                        <div>
                            <strong class="block font-label-technical text-label-technical uppercase tracking-wider mb-1">Connection Error</strong>
                            Unable to connect to the secure submission server. Please check your network connection and try submitting again.
                        </div>
                    </div>
                `;
            } finally {
                // Restore button state
                if (submitBtn) {
                    submitBtn.disabled = false;
                    if (btnSpan) btnSpan.textContent = originalText;
                }
            }
        });
    }

    // 6. Universal Newsletter Form Handling
    const newsletterForms = document.querySelectorAll('form');
    newsletterForms.forEach(form => {
        const emailInput = form.querySelector('input[type="email"][placeholder*="Email"]');
        if (emailInput && !form.id) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const container = form.parentElement;
                if (container) {
                    container.innerHTML = `
                        <h4 class="font-headline font-bold text-white mb-3 uppercase tracking-widest text-sm">Newsletter</h4>
                        <div class="bg-primary-container/20 border border-primary p-4 text-sm text-primary flex items-center gap-3 animate-fade-in">
                            <span class="material-symbols-outlined">mark_email_read</span>
                            <span>Subscribed successfully! Thank you.</span>
                        </div>
                    `;
                }
            });
        }
    });
});


