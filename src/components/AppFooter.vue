<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})

const company = [
    'About'
]
</script>

<template>
    <div class="appfooter">
        <div class="footer">
            <div class="footer-part logo-wrapper">
                <a href="/">
                    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="82" height="60" />
                </a>
            </div>
            <div class="footer-part links-wrapper">
                <ul class="footer-links">
                    <li class="nav-item nav-link-head">
                        <router-link to="/foo" class="nav-link">Company</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">About Us Careers</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Partner With Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Terms & Conditions</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Privacy Policy</router-link>
                    </li>
                </ul>
                <ul class="footer-links">
                    <li class="nav-item nav-link-head">
                        <router-link to="/foo" class="nav-link">Become a Host</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Start Your Business</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Host Support</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Host Ranking</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Vehicle Protection & Insurance</router-link>
                    </li>
                </ul>
                <ul class="footer-links">
                    <li class="nav-item nav-link-head">
                        <router-link to="/foo" class="nav-link">Guest Support</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Kickstart Your Journey</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Trouble With Booking</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Guest Fees</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Account Safety</router-link>
                    </li>
                </ul>
                <ul class="footer-links">
                    <li class="nav-item nav-link-head">
                        <router-link to="/foo" class="nav-link">Support Centre</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Support Page</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Trust & Safety</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Cancellations</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">Covid-19 Guidelines</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/foo" class="nav-link">FAQs</router-link>
                    </li>
                </ul>

            </div>

            <div class="footer-part addition-info">
                <div class="social-links">
                    <a href="#"><img alt="facebook" src="../assets/icons/facebook.svg" /></a>
                    <a href="#"><img alt="facebook" src="../assets/icons/twitter.svg" /></a>
                    <a href="#"><img alt="facebook" src="../assets/icons/instagram.svg" /></a>
                </div>
                <div class="allrights">
                    <p>2022 Vumah. All rights perserved</p>
                </div>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
.appfooter {
    position: relative;
    bottom: 0;
    padding: 100px 80px 0;
    width: 100%;
    border-radius: 25px 25px 0 0;
    background-color: $main-color-dg;
    color: $main-color-w;

    .footer {
        // padding-right: 200px;

        .links-wrapper {
            display: flex;
            // align-items: center;
            justify-content: space-between;
            // padding: 50px 0;
            padding: 50px 200px 50px 0px;

            .footer-links {
                list-style-type: none;

                .nav-item {
                    padding: 5px 0;

                    .nav-link {
                        line-height: 27px;
                        font-size: $text-medium;
                        // font-family: ;
                    }
                }

                .nav-link-head {
                    font-size: $sub-header !important;
                    margin-bottom: 35px;
                }

                .nav-item:first {
                    padding: 6px 0;

                    .nav-link {
                        line-height: 32px;
                        font-size: 20px;
                        // font-family: ;
                    }
                }

            }
        }

        .addition-info {
            padding: 15px 0;
            display: flex;
            border-top: 1px solid white;

            .social-links {
                display: flex;
            }

            .allrights {
                line-height: 50px;
                font-size: 22px;
                position: absolute;
                right: 80px;
            }
        }
    }

    @media (min-width: 1024px) {}
}
</style>
