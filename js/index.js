
window.onload=function(){
    class mobileToggle {
        constructor() {
            this.event()
        }
        
        event() {
            // alert("Toggle listener triggered");
            document.querySelector(".fa-bars").addEventListener('click', e => this.toggle());
            document.querySelector(".fa-close").addEventListener('click', e => this.toggle());
        }
        toggle() {
            document.querySelector(".mobile-menu").classList.toggle("mobile-toggle");
            document.querySelector(".fa-bars").classList.toggle("close");
            document.querySelector(".fa-close").classList.toggle("close");
            // alert("Toggle ran successfully");
        }
    }
    new mobileToggle();
}
