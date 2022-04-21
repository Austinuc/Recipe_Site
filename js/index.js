
window.onload=function(){
    class mobileToggle {
        constructor() {
            this.event()
        }
        
        event() {
            // alert("Toggle listener triggered");
            document.querySelector(".fa-bars").addEventListener('click', e => this.toggle());
        }
        toggle() {
            document.querySelector(".mobile-menu").classList.toggle("mobile-toggle");
            // alert("Toggle ran successfully");
        }
    }
    new mobileToggle();
}
