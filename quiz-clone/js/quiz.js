// Mosteiro de Sao Bento - Quiz Controller
let currentStep = 1;
let isTransitioning = false;

// Format checkout link with current UTM parameters
function formatCheckoutLinks() {
  const checkoutBtn = document.getElementById('checkout-btn');
  if (!checkoutBtn) return;
  try {
    const currentUrl = new URL(window.location.href);
    const targetUrl = new URL('checkout/', window.location.href);
    currentUrl.searchParams.forEach((value, key) => {
      targetUrl.searchParams.set(key, value);
    });
    checkoutBtn.href = targetUrl.toString();
  } catch (e) {
    checkoutBtn.href = 'checkout/';
  }
}

// Navigate between steps with original Next.js fade transition timing
function goToStep(nextStep) {
  if (isTransitioning || currentStep === nextStep) return;
  isTransitioning = true;

  const currentStepEl = document.getElementById('step-' + currentStep);
  const nextStepEl = document.getElementById('step-' + nextStep);

  if (!nextStepEl) {
    isTransitioning = false;
    return;
  }

  // Pause videos when navigating away
  if (currentStep === 2) {
    const v2 = document.getElementById('video-step-2');
    if (v2) v2.pause();
  } else if (currentStep === 8) {
    const v8 = document.getElementById('video-step-8');
    if (v8) v8.pause();
  }

  // Trigger fadeOut
  if (currentStepEl) {
    currentStepEl.classList.remove('animate-fadeIn');
    currentStepEl.classList.add('animate-fadeOut');
  }

  setTimeout(() => {
    if (currentStepEl) {
      currentStepEl.classList.add('hidden');
      currentStepEl.classList.remove('animate-fadeOut');
    }

    nextStepEl.classList.remove('hidden');
    nextStepEl.classList.add('animate-fadeIn');
    window.scrollTo({ top: 0, behavior: 'instant' });

    currentStep = nextStep;
    isTransitioning = false;

    // Trigger step-specific actions
    if (nextStep === 2) {
      const v2 = document.getElementById('video-step-2');
      if (v2) {
        v2.currentTime = 0;
        v2.play().catch(() => {});
      }
      resetProgressBar('progress-bar-2');
    } else if (nextStep === 3) {
      resetProgressBar('progress-bar-3');
    } else if (nextStep === 4) {
      resetProgressBar('progress-bar-4');
    } else if (nextStep === 5) {
      resetProgressBar('progress-bar-5');
    } else if (nextStep === 6) {
      resetBallProgress();
    } else if (nextStep === 8) {
      const v8 = document.getElementById('video-step-8');
      if (v8) {
        v8.currentTime = 0;
        v8.play().catch(() => {});
      }
      formatCheckoutLinks();
    }
  }, 300);
}

function selectOptionAndGo(nextStep, btn) {
  if (btn) {
    btn.style.borderColor = 'rgb(107, 57, 4)';
    btn.style.backgroundColor = 'rgba(184, 137, 58, 0.08)';
  }
  goToStep(nextStep);
}

function resetProgressBar(id) {
  const bar = document.getElementById(id);
  if (bar) {
    bar.style.animation = 'none';
    bar.offsetHeight; /* trigger reflow */
    bar.style.animation = 'progressBar 300ms ease-out forwards';
  }
}

function resetBallProgress() {
  const ball = document.getElementById('gauge-ball-progress');
  if (ball) {
    ball.classList.remove('animate-ball-progress');
    ball.offsetHeight; /* trigger reflow */
    ball.classList.add('animate-ball-progress');
  }
}

function toggleUnmute(step) {
  const vid = document.getElementById('video-step-' + step);
  const overlay = document.getElementById('unmute-overlay-' + step);
  if (vid) {
    vid.muted = false;
    vid.volume = 1;
    vid.currentTime = 0;
    vid.play().catch(() => {});
  }
  if (overlay) {
    overlay.classList.add('hidden-overlay');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  formatCheckoutLinks();
  // Pre-fetch video streams for instant playback
  const v2 = document.getElementById('video-step-2');
  if (v2) v2.load();
  const v8 = document.getElementById('video-step-8');
  if (v8) v8.load();
});
