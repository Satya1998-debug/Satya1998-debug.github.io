---
layout: page
title: CallPilot
description: Hack-Nation 2026. A voice agent that finds a nearby provider, checks your calendar and books the appointment for you.
importance: 1
category: side-projects
featured: true
featured_rank: 4
icon: ti ti-phone-call
period: 2026
tech: [LangGraph, ElevenLabs, Google Maps API, Streamlit, MCP]
github: https://github.com/Satya1998-debug/CallPilot
---

Built at the **Hack-Nation Global AI Hackathon** (February 2026), run in collaboration with the MIT Sloan AI Club.

Booking a doctor's appointment usually means calling several practices, comparing free slots with your own calendar, and repeating yourself every time. CallPilot does that for you. You say what you need, and an agentic workflow handles the conversation, finds suitable providers nearby, matches their availability against your calendar and books the best slot. The point was to show AI moving beyond chat into finishing real-world tasks on its own.

<div class="row">
  <div class="col-sm-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/callpilot_flow.png" class="img-fluid rounded z-depth-1" zoomable=true alt="CallPilot end-to-end flow" %}
  </div>
  <div class="col-sm-7 mt-3 mt-md-0">
    <h4>What it does</h4>
    <ul>
      <li><b>Voice in, voice out:</b> real-time microphone input with ElevenLabs speech-to-text, and optional ElevenLabs text-to-speech replies.</li>
      <li><b>Agentic workflow:</b> LangGraph decides the next step and calls tools.</li>
      <li><b>Calendar aware:</b> checks your Google Calendar before proposing a slot.</li>
      <li><b>Location aware:</b> Google Places and Maps find nearby providers, and a scoring function picks the best match.</li>
      <li><b>Two modes:</b> an MCP / LLM agent mode, and a local workflow mode.</li>
      <li><b>UI:</b> a conversational Streamlit front end.</li>
    </ul>
  </div>
</div>
<div class="caption">End-to-end flow from the spoken request to the booked appointment.</div>

Code: [Satya1998-debug/CallPilot](https://github.com/Satya1998-debug/CallPilot).

**Stack:** Python, LangGraph, ElevenLabs STT/TTS, Google Calendar, Google Places & Maps APIs, MCP, Streamlit.
