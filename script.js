// Complete structural state timeline using Indian English phrasing and side positions
const scenarioTimeline = [
    {
        // Scene 1: Introduction at the tea stall
        baseImage: "1000016884.jpg",
        talkImage: "1000016884.jpg", 
        speaker: "INTRODUCTION",
        text: "Welcome to our cyber safety awareness presentation. Today, we will examine a serious financial fraud happening in our local markets, and learn how to protect our hard-earned money.",
        cameraEffect: "zoom-default",
        isTalking: false,
        voiceMode: "storyteller",
        bubblePosition: "pos-center" 
    },
    {
        // Scene 1 Continuation: Introduce Kaka at his shop
        baseImage: "1000016896.jpg",
        talkImage: "1000016896.jpg", 
        speaker: "INTRODUCTION",
        text: "Meet Kaka. He runs a small tea stall in the village. A kind-hearted and innocent person.",
        cameraEffect: "zoom-default",
        isTalking: false,
        voiceMode: "storyteller",
        bubblePosition: "pos-center"
    },
    {
        // Scene 2 Continuation: Phone starts ringing / Unknown call screen
        baseImage: "1000016885.jpg",
        talkImage: "1000016885.jpg", 
        speaker: "KAKA",
        text: " Wow today climate is too good right. Wait.. my phone is ringing. It is an unknown number. Let me pick it up and check who it is.",
        cameraEffect: "zoom-kaka", 
        isTalking: true,
        voiceMode: "kaka-normal", 
        bubblePosition: "pos-left"
    },
    {
        // Scene 2 Continuation: Fraud Caller claims lottery prize winnings
        baseImage: "1000016887.jpg",
        talkImage: "1000016887.jpg", 
        speaker: "FRAUD CALLER",
        text: "Hello, Sir.. Congratulations!You have won a bumper prize of two lakh rupees in our lucky draw. To receive this huge cash amount directly into your bank account, quickly read out the secret OTP number that just arrived on your mobile screen.",
        cameraEffect: "zoom-default", 
        isTalking: true,
        voiceMode: "caller", // Slick, fast, distinctive fraudulent caller voice
        bubblePosition: "pos-center" 
    },
    {
        // Scene 3: Kaka excitedly reads out his secret OTP
        baseImage: "1000016888.jpg",
        talkImage: "1000016888.jpg", 
        speaker: "KAKA",
        text: "Hey Bhagwan! Two lakhs? My entire life's worries are over! Yes, note down the OTP sir. It is nine, two, three, eight. Please credit the prize money immediately!",
        cameraEffect: "zoom-default",
        isTalking: true,
        voiceMode: "kaka-happy", 
        bubblePosition: "pos-left"
    },
    {
        // Scene 4: Instant bank debit text only narrative
        baseImage: "1000016889.jpg",
        talkImage: "1000016889.jpg", 
        speaker: "NOTIFICATION",
        text: "Alert Message: 10,000 rupees have been debited from your bank account.",
        cameraEffect: "zoom-message-view",
        isTalking: false,
        voiceMode: "storyteller",
        bubblePosition: "pos-center"
    },
    {
        // Scene 4 Continuation: Kaka panics about his savings being stolen
        baseImage: "1000016890.jpg",
        talkImage: "1000016890.jpg", 
        speaker: "KAKA",
        text: "Hey Ram! What is this disaster? Instead of receiving money, ten thousand rupees got cut from my account! I have been scammed! My hard-earned shop savings are gone!",
        cameraEffect: "zoom-kaka",
        isTalking: true,
        voiceMode: "kaka-panic", 
        bubblePosition: "pos-left"
    },
    {
        // Scene 5: Ramesh steps in and consoling the kaka
        baseImage: "1000016895.jpg",
        talkImage: "1000016895.jpg", 
        speaker: "RAMESH",
        text: "What happened Kaka, why are you screaming? Please! First control yourself and dont panic, now tell me what happened?", 
        cameraEffect: "zoom-default",
        isTalking: true,
        voiceMode: "ramesh-hopeful", 
        bubblePosition: "pos-right" 
    },
    {
        // Scene 5 Continuation: Kaka is tensed
        baseImage: "1000016891.jpg",
        talkImage: "1000016891.jpg", 
        speaker: "KAKA",
        text: "I just got scammed, all my savings have been debited from my account. A fraudster called me and said that I won a lottery of 2 lakhs. He told me to give him the OTP to receive the money. In excitement, I shared the OTP and the call hang up. Then I got a notification that 10,000 rupees were debited!",
        cameraEffect: "zoom-kaka",
        isTalking: true,
        voiceMode: "kaka-tensed", 
        bubblePosition: "pos-left"
    },
    {
        // Scene 6: Ramesh is giving the solution
        baseImage: "1000016892.jpg",
        talkImage: "1000016892.jpg", 
        speaker: "RAMESH",
        text: "These online fraudsters trap innocent people by lying about lotteries. But you dont worry, there is a way out. Dial 1 9 3 0! It is the number of the Government of India's National Cyber Crime Helpline. If we register a complaint immediately within this golden hour, the cyber police can freeze the thief's account and pull your money back safely! You can also file a complaint at cybercrime.gov.in",
        cameraEffect: "zoom-default",
        isTalking: true,
        voiceMode: "ramesh-confident", 
        bubblePosition: "pos-right" 
    },
    {
        // Scene 6 Continuation: Kaka is relieved
        baseImage: "1000016893.jpg",
        talkImage: "1000016893.jpg", 
        speaker: "KAKA",
        text: "Ramesh beta, you have saved me like a godsend. I will call 1 9 3 0 this very second before it is too late.",
        cameraEffect: "zoom-kaka",
        isTalking: true,
        voiceMode: "kaka-relieved", 
        bubblePosition: "pos-left"
    },
    {
        // Scene 7: Conclusion safety rules overview dashboard screen
        baseImage: "1000016899.jpg", 
        talkImage: "1000016899.jpg", 
        speaker: "RAMESH",
        text: "Friends, always keep this simple lesson in mind: Never scan a QR code to receive money and never enter your UPI pin to claim a prize. If you get scammed, dont lose hope immediately dial 1 9 3 0  or file your case at cybercrime.gov.in. Protect yourself and your family from UPI frauds. Stay Alert, Stay Safe!",
        cameraEffect: "zoom-default",
        isTalking: true,
        showRulesDashboard: true, 
        voiceMode: "ramesh-confident",
        bubblePosition: "pos-right"
    },
    {
        // Scene 8: Final Clean Blank Slide
        baseImage: "1000016894.jpg", 
        talkImage: "1000016894.jpg", 
        speaker: "",
        text: "", 
        cameraEffect: "zoom-default",
        isTalking: false,
        voiceMode: "silent",
        bubblePosition: "pos-center"
    }
];

let currentIndex = 0;
const ttsEngine = window.speechSynthesis;
let femaleAiVoice = null;
let maleBaseVoice = null;
let flipFlopIntervalId = null;
let videoPlaying = false;

function assignEngineVoices() {
    if (!ttsEngine) return;
    const systemVoices = ttsEngine.getVoices();

    // 1. Female AI voice for Storyteller & Announcements
    femaleAiVoice = systemVoices.find(v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('google') || v.name.toLowerCase().includes('samantha'))) || systemVoices[0];

    // 2. Male baseline voice to derive customized configurations from
    maleBaseVoice = systemVoices.find(v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('ravi'))) || systemVoices[0];
}

if (typeof ttsEngine !== 'undefined' && ttsEngine.onvoiceschanged !== undefined) {
    ttsEngine.onvoiceschanged = assignEngineVoices;
}

document.addEventListener("DOMContentLoaded", () => {
    const playTrigger = document.getElementById('gesture-hint');
    if (playTrigger) playTrigger.addEventListener('click', startPresentationEngine);
});

function startPresentationEngine() {
    if (videoPlaying) return;
    videoPlaying = true;
    ttsEngine.cancel();
    
    const overlay = document.getElementById('gesture-hint');
    if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(() => {
            overlay.style.display = 'none';
            assignEngineVoices();
            renderTimelineFrame();
        }, 400);
    }
}

function liveImageLipsync(frame) {
    if (!frame.isTalking) return;
    const stage = document.getElementById('main-stage');
    let dynamicToggle = false;

    if (!flipFlopIntervalId) {
        flipFlopIntervalId = setInterval(() => {
            dynamicToggle = !dynamicToggle;
            stage.style.backgroundImage = `url('${dynamicToggle ? frame.talkImage : frame.baseImage}')`;
        }, 140);
    }
}

function stopLiveLipsync(frame) {
    if (flipFlopIntervalId) {
        clearInterval(flipFlopIntervalId);
        flipFlopIntervalId = null;
    }
    const stage = document.getElementById('main-stage');
    if (stage && frame) stage.style.backgroundImage = `url('${frame.baseImage}')`;
}

function clearCustomOverlays() {
    const dynamicOverlays = ['dashboard-card'];
    dynamicOverlays.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.remove();
    });
}

function renderTimelineFrame() {
    stopLiveLipsync();
    clearCustomOverlays();

    if (currentIndex >= scenarioTimeline.length) {
        document.getElementById('speaker-tag').innerText = "";
        document.getElementById('dialogue-text').innerText = "";
        return;
    }

    const currentFrame = scenarioTimeline[currentIndex];
    const stage = document.getElementById('main-stage');
    const container = document.getElementById('video-wrapper');
    const subtitleBox = document.getElementById('subtitle-line');

    if (stage) {
        stage.style.backgroundImage = `url('${currentFrame.baseImage}')`;
        stage.className = `animation-bg ${currentFrame.cameraEffect}`;
    }

    if (subtitleBox) {
        if (currentFrame.speaker === "" && currentFrame.text === "") {
            subtitleBox.style.display = "none";
        } else {
            subtitleBox.style.display = "block";
            subtitleBox.className = `dialogue-overlay-box ${currentFrame.bubblePosition}`;
        }
    }

    if (currentFrame.showRulesDashboard && container) {
        container.insertAdjacentHTML('beforeend', `
            <div id="dashboard-card" class="cyber-rules-dashboard">
                <h3>🔒 CYBER HYGIENE PROTOCOLS</h3>
                <ul style="list-style: none; padding-top: 10px;">
                    <li style="margin-bottom: 12px;">❌ <b>NEVER</b> scan a QR Code to receive money.</li>
                    <li style="margin-bottom: 12px;">❌ <b>NEVER</b> enter your secure UPI PIN to claim a lottery prize.</li>
                    <li style="margin-bottom: 12px;">❌ <b>NEVER</b> share your secret mobile Bank OTP with anyone.</li>
                    <li style="margin-bottom: 12px;">📞 If scammed, call <b>1930</b> immediately or visit <b>cybercrime.gov.in</b></li>
                </ul>
            </div>
        `);
    }

    if (currentFrame.voiceMode === "silent") {
        document.getElementById('speaker-tag').innerText = "";
        document.getElementById('dialogue-text').innerText = "";
        currentIndex++;
        return;
    }

    // Female AI Storyteller announces character names sequentially
    if (currentFrame.speaker !== "INTRODUCTION" && currentFrame.speaker !== "NOTIFICATION") {
        document.getElementById('speaker-tag').innerText = "STORYTELLER: ";
        document.getElementById('dialogue-text').innerText = `${currentFrame.speaker} is speaking...`;

        const introAnnouncement = new SpeechSynthesisUtterance(`${currentFrame.speaker}`);
        if (femaleAiVoice) introAnnouncement.voice = femaleAiVoice;
        introAnnouncement.pitch = 1.05; 
        introAnnouncement.rate = 0.90;  

        introAnnouncement.onend = () => {
            fireActualDialogueSpeech(currentFrame);
        };
        ttsEngine.speak(introAnnouncement);
    } else {
        fireActualDialogueSpeech(currentFrame);
    }
}

function fireActualDialogueSpeech(currentFrame) {
    document.getElementById('speaker-tag').innerText = currentFrame.speaker ? currentFrame.speaker + ": " : "";
    document.getElementById('dialogue-text').innerText = currentFrame.text;

    const speechPackage = new SpeechSynthesisUtterance(currentFrame.text);

    // Filter voice routing to prevent cross-mixing
    if (currentFrame.voiceMode === "storyteller") {
        if (femaleAiVoice) speechPackage.voice = femaleAiVoice;
    } else {
        if (maleBaseVoice) speechPackage.voice = maleBaseVoice;
    }

    switch(currentFrame.voiceMode) {
        case "storyteller":
            speechPackage.pitch = 1.10; speechPackage.rate = 0.88; // Bold Female AI Narration
            break;
        case "kaka-normal":
            speechPackage.pitch = 0.60; speechPackage.rate = 0.80; // Old grandfather voice
            break;
        case "kaka-happy":
            speechPackage.pitch = 0.72; speechPackage.rate = 0.95; // Excited grandfather voice
            break;
        case "kaka-panic":
            speechPackage.pitch = 0.55; speechPackage.rate = 1.10; 
            break;
        case "kaka-tensed":
            speechPackage.pitch = 0.50; speechPackage.rate = 0.72; 
            break;
        case "kaka-relieved":
            speechPackage.pitch = 0.65; speechPackage.rate = 0.82; 
            break;
        case "ramesh-hopeful":
            speechPackage.pitch = 1.40; speechPackage.rate = 0.95; // Young boy voice
            break;
        case "ramesh-confident":
            speechPackage.pitch = 1.45; speechPackage.rate = 1.02; // High pitch confident boy tone
            break;
        case "caller":
            speechPackage.pitch = 0.95; speechPackage.rate = 1.15; // Smooth, fast-talking, sharp middle-aged fraudster voice
            break;
        default:
            speechPackage.pitch = 1.00; speechPackage.rate = 0.95;
    }

    speechPackage.onboundary = (e) => {
        if (e.name === 'word' && currentFrame.isTalking) liveImageLipsync(currentFrame);
    };

    speechPackage.onend = () => {
        stopLiveLipsync(currentFrame);
        currentIndex++;
        setTimeout(renderTimelineFrame, 500); 
    };

    ttsEngine.speak(speechPackage);
}