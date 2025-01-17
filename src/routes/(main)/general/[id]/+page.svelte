<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ImageCarousel from '$lib/components/images/ImageCarousel.svelte';
  import BackdropText from '$lib/components/text/BackdropText.svelte';
  import FaCheckCircle from 'svelte-icons/fa/FaCheckCircle.svelte';
  import FaGraduationCap from 'svelte-icons/fa/FaGraduationCap.svelte';
  import { tweened } from 'svelte/motion';
  import type { PageData } from './$types';

  export let data: PageData;
  $: moreInfo = data.moreInfo;

  const animatedTitleIndex = tweened(0, { duration: 600 });
  $: animatedTitleOutput =
    moreInfo.title.slice(0, $animatedTitleIndex) +
    ($animatedTitleIndex === moreInfo.title.length ? '' : '|');

  async function resetAnimation() {
    await animatedTitleIndex.set(0, { duration: 0 });
    animatedTitleIndex.set(moreInfo.title.length);
  }

  $: moreInfo.title, resetAnimation();
</script>

<Container>
  <div class="flex-[4] min-h-screen">
    <div class="flex flex-col pt-6 md:pt-8">
      <div class="flex-1">
        <p class="mb-4">{new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
        {#if moreInfo.about}
          <img src="../HPE-square-logo.png" class="w-80" alt="HPE's logo">
        {/if}
        <BackdropText
          text={animatedTitleOutput}
          className="font-extrabold text-5xl md:text-8xl leading-[5rem] md:leading-[8rem]"
        />
      </div>
      <div class="flex-1 mt-6">
        <div class="md:text-lg mb-6">{moreInfo.overview}</div>

        <ul class="flex flex-col gap-6">
          {#each moreInfo.bullets as bullet}
            <li class="flex flex-row">
              <div>
                <div class="text-emerald-500 w-[24px]">
                  <FaCheckCircle />
                </div>
              </div>

              <div class="ml-4">
                <p>{bullet}</p>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    {#if (moreInfo.hideSignUp)}
    <a
      href="https://frhs.egusd.net/Programs/STEAM-Pathways/index.html"
      class="w-max items-center flex flex-row my-8 md:my-10 rounded-l-2xl bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white text-[13px] sm:text-sm md:text-base tracking-wide shadow-lg shadow-blue-500/50 transition hover:-translate-y-1"
      style="border-radius: 16px 50px 50px 16px;"
    >
      <p class="font-semibold font-sans">Sign up for the Computer Science Pathway</p>

      <block class="w-4 h-4 block ml-4">
        <FaGraduationCap />
      </block>
    </a>
    {/if}

    {#if moreInfo.about}
      <h1 class="mt-8 font-body text-3xl font-semibold">What is this program?</h1>
      <p class="mt-4 text-1xl">{moreInfo.about.text}</p>
      <div class="my-8">
        <h1 class="text-2xl mb-2 font-semibold">Supported Language</h1>
        <ul>
          <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
            <linearGradient id="I7Vs8jY1D20h9XOqJ6Dbaa_mhwmyz1eu7T5_gr1" x1="10.925" x2="26.209" y1="-11.924" y2="30.068" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset="1" stop-color="#4c5963"></stop></linearGradient><path fill="url(#I7Vs8jY1D20h9XOqJ6Dbaa_mhwmyz1eu7T5_gr1)" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0	c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867	c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0	c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867	c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><linearGradient id="I7Vs8jY1D20h9XOqJ6Dbab_mhwmyz1eu7T5_gr2" x1="20.213" x2="36.727" y1="13.776" y2="59.147" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset="1" stop-color="#4c5963"></stop></linearGradient><path fill="url(#I7Vs8jY1D20h9XOqJ6Dbab_mhwmyz1eu7T5_gr2)" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836	c3.343-1.872,13.405-7.507,16.748-9.38c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331	c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14s-14-6.273-14-14	S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><linearGradient id="I7Vs8jY1D20h9XOqJ6Dbac_mhwmyz1eu7T5_gr3" x1="27.238" x2="42.569" y1="2.443" y2="44.566" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset="1" stop-color="#4c5963"></stop></linearGradient><path fill="url(#I7Vs8jY1D20h9XOqJ6Dbac_mhwmyz1eu7T5_gr3)" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127	L23.593,24L42.485,13.205z" clip-rule="evenodd"></path><path d="M38,20v2h2v1h-2v2h2v1h-2v2h-1v-2h-2v2h-1v-2h-2v-1h2v-2h-2v-1h2v-2h1v2h2v-2H38 M35,25h2v-2h-2V25 M39,19h-1h-1h-1h-1h-1 h-1v1v1h-1h-1v1v1v1v1v1v1h1h1v1v1h1h1h1v-1v-1v1v1h1h1h1v-1v-1h1h1v-1v-1v-1h-1h-1h1h1v-1v-1v-1h-1h-1v-1V19L39,19z" opacity=".05"></path><path d="M38,20v2h2v1h-2v2h2v1h-2v2h-1v-2h-2v2h-1v-2h-2v-1h2v-2h-2v-1h2v-2h1v2h2v-2H38 M35,25h2v-2h-2V25 M38.5,19.5H38h-1h-0.5 V20v1.5h-1V20v-0.5H35h-1h-0.5V20v1.5H32h-0.5V22v1v0.5H32h1.5v1H32h-0.5V25v1v0.5H32h1.5V28v0.5H34h1h0.5V28v-1.5h1V28v0.5H37h1 h0.5V28v-1.5H40h0.5V26v-1v-0.5H40h-1.5v-1H40h0.5V23v-1v-0.5H40h-1.5V20V19.5L38.5,19.5z M35.5,23.5h1v1h-1V23.5L35.5,23.5z" opacity=".07"></path><path fill="#fff" d="M40,23v-1h-2v-2h-1v2h-2v-2h-1v2h-2v1h2v2h-2v1h2v2h1v-2h2v2h1v-2h2v-1h-2v-2H40z M37,25h-2v-2h2V25 z"></path><g><path d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9C15.729,9,9,15.729,9,24s6.729,15,15,15c5.367,0,10.36-2.908,13.03-7.59l0.503-0.882l-0.89-0.49 l-6.132-3.374l-0.851-0.468l-0.493,0.837C28.09,28.863,26.11,30,24,30c-3.308,0-6-2.692-6-6s2.692-6,6-6 c2.099,0,4.011,1.076,5.115,2.879l0.507,0.828l0.842-0.481l6.073-3.47l0.882-0.504l-0.518-0.874C34.205,11.827,29.262,9,24,9L24,9 z" opacity=".05"></path><path d="M24,10c5.128,0,9.602,2.771,12.041,6.887l-6.073,3.47C28.737,18.347,26.527,17,24,17c-3.864,0-7,3.136-7,7 c0,3.863,3.137,7,7,7c2.57,0,4.812-1.392,6.029-3.459l6.132,3.374C33.75,35.142,29.21,38,24,38c-7.727,0-14-6.273-14-14 S16.273,10,24,10 M24,9.5C16.005,9.5,9.5,16.005,9.5,24S16.005,38.5,24,38.5c5.188,0,10.014-2.812,12.595-7.337l0.252-0.441 l-0.445-0.245l-6.132-3.374l-0.425-0.234l-0.246,0.418C28.431,29.269,26.286,30.5,24,30.5c-3.584,0-6.5-2.916-6.5-6.5 s2.916-6.5,6.5-6.5c2.275,0,4.346,1.166,5.542,3.118l0.253,0.414l0.421-0.241l6.073-3.47l0.441-0.252l-0.259-0.437 C33.864,12.233,29.086,9.5,24,9.5L24,9.5z" opacity=".07"></path></g>
            </svg>
            <p class="ml-2 text-lg">C#</p>
          </li>
          <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="45" viewBox="0 0 48 48">
            <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
            </svg>
            <p class="ml-2 text-lg">Java</p>
          </li>
          <li class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
            </svg>
            <p class="ml-2 text-lg">Python</p>
          </li>
        </ul>
      </div>
      
      <div class="mt-12 mb-24">
        <h1 class="text-1xl font-semibold text-blue-700">Want more information?</h1>
        <h1 class="text-3xl font-semibold">Checkout the offical website!</h1>
        <a class="my-6 p-4 rounded-l-2xl bg-violet-600 text-white w-max items-center flex flex-row rounded-l-2xl shadow-lg shadow-blue-500/50 transition hover:translate-x-3"
        style="border-radius: 16px 50px 50px 16px;" href="https://schoolcerts.ext.hpe.com/">Program Website</a>
        <a class="my-6 p-4 rounded-l-2xl bg-violet-700 text-white w-max items-center flex flex-row rounded-l-2xl shadow-lg shadow-blue-500/50 transition hover:translate-x-3"
        style="border-radius: 16px 50px 50px 16px;" href="https://schoolcerts.ext.hpe.com/certificates#top">List of Certificates</a>
        <a class="my-6 p-4 rounded-l-2xl bg-violet-800 text-white w-max items-center flex flex-row rounded-l-2xl shadow-lg shadow-blue-500/50 transition hover:translate-x-3"
        style="border-radius: 16px 50px 50px 16px;" href="https://schoolcerts.ext.hpe.com/rules#experienceLevels">Policy and Expectaction</a>

      </div>
    {/if}

    {#if data.pageImages.length > 0}
      <div class="flex flex-col-reverse md:flex-row md:space-x-8">
        <div class="flex-1 mt-8 md:mt-0">
          <ImageCarousel images={data.pageImages.map((src) => ({ alt: '', src }))} />
        </div>
      </div>
    {/if}

    {#if moreInfo.testimonies && moreInfo.testimonies.length> 0}
      <div class="mt-8">
        <BackdropText
          text="Hear what past students have to say."
          className="font-bold text-3xl lg:text-3xl leading-normal sm:leading-[3rem] lg:leading-normal"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
          {#each moreInfo.testimonies as testimony}
            <div>
              <p>{testimony.text}</p>
              <p class="font-bold">- {testimony.author}</p>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</Container>
