/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Mengingat pooh yang menunggu pii 'ribuan' tahun, dan akhirnyaa kembali bersama pooh.",
          artist: "Christina Perri - A Thousand Years",
          cover: "https://raw.githubusercontent.com/ProfPriv/bucin4ever/main/img/bodyguardSMA.jpg",
          source: "https://dl184.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0hrTWN6MUFRcUQ2b0hsb2c5eGUzcmFPZ0VHcThBMkptakg5b2Z6RHZaWThQQUh3bVB2NXN2UTMvSzJzTXVzRHlFeFlja1hNWS9Xd2FyM2VDcW1qUkptUWJoZG9XSVI1NVBZbUp2dGtKbWxuUzF3ZUdIL0VmZTVUai9nVlRSWVNVZXQzVUlNdmlidk5STDNYdkNmT1B0M1pFNnZTT044Sk4yMjgrSnZBN2owTE13dk9Oc1cwVm1ZSzlTMzV6ODNQbk5xWGdVbFlvVjJYS3lvT2FqQ2FFbkNJcUlXeGhFSnhwWnVhSGlURWhZeUNBUnBVV2FzS285L21rYmRMUjg1V2ZwcUtTL05XZk9MSmVpR05lWEkvSzQrNUd2dEtrMTZSYUh0ZldhbUpnWg%3D%3D",
          url: "https://www.youtube.com/watch?v=rtOvBOTyX00&ab_channel=ChristinaPerri",
          favorited: false
        },
        {
          name: "Lagu yang menceritakan pooh yang siap jatuh cinta lagi setelah pii putus hehehe.",
          artist: "HIVI - Siapkah Kau 'Tuk Jatuh Cinta Lagi",
          cover: "https://raw.githubusercontent.com/ProfPriv/bucin4ever/main/img/firstdate.jpg",
          source: "https://dl149.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ01zZU1UakZzUUNLcGNyWXdubk0raE5vSjdPNnhFNTR1MkJOWWYxamZXWmRIQUhBNk92OU1KUkhXSTlOODh0WFRqNnB3cFdvSkhYeEw5bEtpdWhtSXdqdzc1ZStmZEZLeGVNRElwaFZsc3hqS0d6dlNSNnpQMW95N285V3ZYS1hZc3Eya0dQT0hWdjV4SDJDS0dKUC90eFprNnZpK2U4cEZJMHMrV3RSVEoxNmMxaDlaMFNsRjhUSk5VMTQ3MDRQek5vazRtajU4YTAwNnRxTzZaQ29jbkZhYWhiejUwT3kwMjR0ZStjMEpOOTNKSi9EancrNzkycUdjTWZ2MWN6Q1N4NGVMZ2REcU1kOC96RXNEU2ZMdmw4SmVnc2E4bnJFamJvNzZUeWNnUndWRHpEdHZwRzlVSzVnPT0%3D",
          url: "https://www.youtube.com/watch?v=kX1O93X77d4",
          favorited: false
        },
        {
          name: "Lagu yang pooh kirim dari video bergambar. Lagu pujian untuk pii yang cantikk dan ada doa harapan untuk selalu bersama celamanyah.",
          artist: "Petra Sihombing ft Ben Sihombing - Mine",
          cover: "https://raw.githubusercontent.com/ProfPriv/bucin4ever/main/img/caridana.jpg",
          source: "https://dl112.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ1VuY0VveGxzUUNLTkRxNDhtMmVQckpkMEVES0lCaHJtckdkRlo5emZXZHB2QUhRYUhzOU1KUkhXSTlOODh0WFRpNXAwcFdvSkhYeEw5bEtpdWhtSXdqdzc1ZStmZEZLeGVNRElwaFZsc3hqS0d6dlNSNnpQMW95N285V3VHS1hZc3Eya0dQT0hWdjV4SDJDS0dKT2ZoeDRJRWtqV1c2cFZFMlBtVHN6N3cxNDA4dmRKS1RVMThmSjFmMEpUeTRQM0ZxMEltajU4YTAwNnRxTzZaQzRzbUZhYWhiejUwT3kwMnc4SFFjejhiZ25BUDNEVHcrNzkycUdjTWZ2MWN6Q1N4NGVMZ2REcU1kOC96RXNEU2ZMdmw4SmFxdHF3bnJFamJvNzZVeXNnUXhWai9EdHZwRzlVSzVnPT0%3D",
          url: "https://www.youtube.com/watch?v=JN_ODe-5qD8",
          favorited: false
        },
        {
          name: "Laguu yang pooh kirim pas awal-awal pacaran, pii insecure pii blg pii elek, padahall cantik bangett dan tidak boleh insecure.",
          artist: "One Direction - What Makes You Beautiful",
          cover: "https://raw.githubusercontent.com/ProfPriv/bucin4ever/main/img/6July2022.jpg",
          source: "https://dl55.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0xsdEJ4NHhreEJLaFlyNElobksrWEs4aGJaWW9PeG8reFd1ZGI0SFg2ZE5HZUpBYVBvNVJ0YlhXSC90VTB1RE9FeFlja1hNWS9Xd2FyM2VDcW1qUkptUWJoZG9XSVI1NVBZbUp2dGtKbWxuUzF3ZUdIL0VmZXNUai9nVlRSWVNVZXQzVUlNdmlidk5SSDIyejBhLzcyMXBNUnBDbVIzWTFCMitTaXVRRDl4cUVCb2ROZ1lVWnhjb1ZKMEp6ZzA4L0RvMEVRZzVBZDFuS3lvT2FqQ2FFRU5vck5TeGhFY3dOZHpLSGlURWhZeUNBUnBVV2FzS285L21rYmRMUjg1V2ZwcUtTL05XZk9MWmVoRnRlWEkvSzQrNWFxdHFzejdoYUh0ZldhbUpnWg%3D%3D",
          url: "https://www.youtube.com/watch?v=QJO3ROT-A4E",
          favorited: false
        },
        {
          name: "Salah satu lagu yang pooh sering nyanyiin untuk pii waktu dulu pii pengen dinyanyiin pas bobokk.",
          artist: "Justin Timberlake, Anna Kendrick - True Colors",
          cover: "https://raw.githubusercontent.com/ProfPriv/bucin4ever/main/img/abc.jpg",
          source: "https://dl130.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ09qY1l1emg1b05hSkJwSWc5MitXckpvSnVJS2tPaHFHbkg5cEcvRDNUT3B1L0locU0vYnNwVG55VDVKMFJvQzNHOE1BdFNabzNVQi8wbnRtemx5VisxRUtuV01IQ0FLeERiM0krOFdadXczWFdudGZTL0VmZXYzejk2aGl5U2dnWTQyOUZNT1dEdDVoTjJqVGlTN0hoeTRBTXZ5T0w2NWRNaDZITDRsS3VsZUZwNzRVelRVMXVkczBPZ01tc2lLV2I0MVFQM1owZWpRPT0%3D",
          url: "https://www.youtube.com/watch?v=la0-5QFLr14",
          favorited: false
        },
        {
          name: "Laguuuu LDR kitaaaa. huhuuu sedih sekaliii.",
          artist: "Ed Sheeran - Photograph",
          cover: "https://raw.githubusercontent.com/ProfPriv/bucin4ever/main/img/ldr.jpg",
          source: "https://dl35.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0JuSjRKenhVbUU2cEM3Y1lmMyt1MExNNWRMN2NIaHFXa0Y5ZFgvRC9VT3YyZUl3YUsvYTR2Um5hT3Vkc3Q2bm5KK29JbFp0bHdRaDZsM3JTRmp6NWpuUkwzZTUyZk03VkdQaklwaFJnbWdRQ0tudnpWclJDMnNIS2c3QURJYVNBMW9UTU9PT2ZSLzZCWTNXYmZZUEQyMG9BTmtpbVo1Sk5LMC9HUml3emowTHM5aDhwOFdrRjdUSjV1L1ozZC9lajVwM0VvenBRTWlRdWpyTzM3TDdwekdiMk9jQ1YxS2lzRTdMSytDazFObDNOS3FUem9zTHdzOUdWVUpmUW1zVGZnckxUNmNHS2NmSm89",
          url: "https://www.youtube.com/watch?v=nSDgHBxUbVQ",
          favorited: false
        },
        {
          name: "Lagu yang pii pilihin untuk music box nya trus kasih untuk pooh nihh.",
          artist: "Elvis Presley - Can't Help Falling In Love",
          cover: "https://raw.githubusercontent.com/ProfPriv/bucin4ever/main/img/pelantikanmg.jpg",
          source: "https://dl29.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0JsTU16MUZzVEU2NWZxb2cybksrRElzZGJaWThLd1pycE45OVkrVGZXZHB1aVBrU2x1WTRqQ1ZLVTg5OHk5ekxmb01nbVVNVjBhUWI1ais3KzAyTlFrQWpnYXMzUEVQMEVTM3ByOEFVeDlTVFdudGZDbmovTXNrMzdwa09zV1dvSG9taE5PdkRmckxac2syelRmLzcyMW9RTW9DUENzOHdmaWFqTDRGT2psUFF0c2Nad0F4WXRJY1VNak1LenpPYVJvVVZJMFE9PQ%3D%3D",
          url: "https://www.youtube.com/watch?v=vGJTaP6anOU",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});