# SatScanPro (Sovereign Core v7.2.1-Beta)
### Autonomous Ground Segment Resiliency Framework & Protocol-Level Telemetry Sanitization

[![Security Assessment](https://img.shields.io/badge/Security-Validated--Class%20I-brightgreen.svg)]()
[![Platform Deployment](https://img.shields.io/badge/Environment-Kali%20Linux%20%7C%20POSIX-blue.svg)]()
[![RF Front-End](https://img.shields.io/badge/Hardware-SDR%20%7C%20HackRF%20%7C%20RTL--SDR-orange.svg)]()
[![Regulatory Compliance](https://img.shields.io/badge/Compliance-ITU%20%7C%20Outer%20Space%20Treaty%201967-lightgrey.svg)]()

---

## 🛰️ 1. Technical Abstract

**SatScanPro** is an air-gapped, low-latency edge defense core engineered to safeguard stasiun bumi (ground segment) telecommand pipelines against malicious telemetry frame injections. The framework establishes a high-performance validation plane that mitigates critical heap-based parsing vulnerabilities—specifically **CVE-2026-9901**—within embedded On-Board Computers (OBC) before non-validated uplinks hit the physical transceiver subsystem.

By decoupling ingestion mechanics from standard dynamic memory bounds, SatScanPro enforces rigid validation layers at the bitstream phase. The architecture continuously interrogates incoming Consultative Committee for Space Data Systems (CCSDS) Advanced Orbiting Systems (AOS) frames, operating entirely within localized infrastructure to achieve deterministic defense constraints under high-stress operational parameters.

---

## 🖥️ 2. Live System Visualization

Below are the interface state representations captured from the isolated Kali Linux node during a Software-In-The-Loop (SITL) digital twin execution simulation.

<p align="center">
  <img src="img/dashboard-metrics.png" width="48%" alt="SatScanPro Operational Dashboard" />
  <img src="img/loss-of-lock-alert.png" width="48%" alt="Automated Loss of Lock Isolation State" />
</p>

<p align="center">
  <i>Figure 1: SatScanPro Core Telemetry Verification Interface (Left: Active nominal state executing real-time Doppler tracking at 137.100 MHz, calculating pass projections for NOAA-19 / ISS, and maintaining a "SYSTEM OK" telemetry status. Right: Automated tactical interception plane indicating an active payload breach attempt under CVE-2026-9901, displaying the critical "STOP - LOSS OF LOCK" override, and immediate data purge sequencing).</i>
</p>

## ⚡ 3. Architectural Deep Dive

### A. Real-Time Doppler Compensation Subsystem
Low Earth Orbit (LEO) orbital velocities (~7.8 km/s profiles) introduce aggressive carrier frequency shifts at the ground station layer. SatScanPro mitigates symbol clock slippage and phase misalignment without polluting raw frame structure via a deterministic physical tracking loop:
* **Predictive SGP4 Ingestion:** Local execution of the Simplified General Perturbations (SGP4) propagation model ingesting raw Two-Line Element (TLE) matrices.
* **Geodesy Math Matrix:** Real-time extraction of high-precision line-of-sight velocity vectors using non-stationary Poisson and Ramanujan iterations to compute instantaneous Doppler offsets:
$$\Delta F = F_c \times \frac{v_{los}}{c}$$
* **Hardware Oscillator Micro-Tuning:** Asynchronous control paths inject calculated drift offsets straight back to the SDR Local Oscillator, preserving absolute bitstream symmetry before Viterbi decoding.

### B. Zero-Copy Kernel Memory Invariants
To eliminate the probability of the ground station becoming an exploitation vector during raw packet ingestion, the parsing hot-path bypasses heap reallocations entirely:
* **Memory-Mapped I/O (MMIO):** Siniar I/Q streams are written directly from the physical hardware register into static, pre-allocated physical memory ring buffers.
* **Process Separation (GIL Evasion):** Multi-processing queues (`iq_queue` and `telemetry_queue`) run natively in separated POSIX kernel boundaries, allowing concurrent Node.js rendering and Python backend calculation to access shared memory segments with zero mutex contention or thread locks.

### C. Sovereign Intelligence Core (S.I.C.)
* **Isolated Reasoning Layer:** Leverages a highly optimized, local 4-bit integer quantized (Q4_K_M) Llama-3-70B pipeline operating inside a closed local enclave.
* **Signature-less Anomaly Discrimination:** The local model evaluates complex state vectors to accurately separate natural RF fading (Rayleigh/Rician atmospheric anomalies) from highly structured, malicious step-function bitstream manipulation sequences.

---

## 🔒 4. Privacy, Source-Code Isolation, & IP Classification

> [!IMPORTANT]  
> **Source-Code Sanitization Notice:** Due to strict data governance protocols regarding critical aerospace infrastructure and proprietary system architecture, the codebase maintained within this public repository has been securely sanitized. 
> 
> The structural interfaces, folder layout, and cryptographic verification bindings represent a fully functional **Proof-of-Concept (PoC) Template**. Production-level backend memory addresses, live hardware integration hooks, and localized tactical telemetry parsing subroutines are deliberately abstracted and redacted to preserve intellectual property boundaries.

---

## 🛠️ 5. Software-In-The-Loop Installation

> [!WARNING]  
> **Regulatory and Treaty Compliance Alignment:** This framework is architected strictly for passive (receive-only) ingestion when bound to physical RF hardware. Exploit payloads, kinetic satellite reactions, and Attitude Determination and Control System (ADCS) responses are modeled entirely inside a Software-In-The-Loop sandbox. This constraint guarantees complete compliance with the International Outer Space Treaty of 1967 and international ITU frequency allocations.

### System Requirements
* **Operating System:** Kali Linux (Rolling) or Ubuntu LTS (Kernel 5.15+ optimized)
* **Environment Engines:** Node.js (v18+) // Python (v3.10+)
* **Validated Hardware Front-ends:** RTL-SDR Blog V3/V4 or HackRF One (Passive mode)

### Instalation 
> npm install > in terminal kali linux 
> npm run dev > in terminal kali linux
> all code I can't publish it, because it violates privacy and sensitivity rights.

#F_AJLI
