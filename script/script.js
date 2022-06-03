const RootComponent = {
  data() {
    return {
      annuelBrut: 0,
      cadres: false,
    };
  },

  methods: {
    changerAnnuelBrut(e) {
      this.annuelBrut = e.target.value;
    },

    switchToCadres(e) {
      this.cadres = e.target.checked;
    },
  },

  computed: {
    annuelNet() {
      if (this.cadres == false) {
        return this.annuelBrut * 0.78;
      } else {
        return this.annuelBrut * 0.75;
      }
    },

    brutMensuel() {
      if (this.cadres == false) {
        return this.annuelBrut * 12;
      } else {
        return this.annuelBrut * 12 * 0.75;
      }
    },

    netMensuel() {
      if (this.cadres == false) {
        return this.annuelBrut * 12 * 0.78;
      } else {
        return this.annuelBrut * 12 * 0.75;
      }
    },
  },
};
Vue.createApp(RootComponent).mount("#root");

// Pour les calculs, vous pouvez utiliser les valeurs suivantes:

// - Une année est composée de 12 mois

// - Les charges salariales pour les salariés non-cadres sont de 22%, le calcul est le suivant: salaire net = salaire brut * 0.78

// - Les charges salariales pour les salariés cadres sont de 25%, le calcul est le suivant: salaire net = salaire brut * 0.75
