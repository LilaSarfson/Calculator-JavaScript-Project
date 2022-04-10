Vue.createApp({
  data() {
      return {
        AllKeysPushed: [],
        Result: "",

      }
  },
  methods:{
    ValueofTheKey (e){
      let keyValue = e.target.value;
      this.AllKeysPushed = this.AllKeysPushed + keyValue; 
    },
    Calculate (){
     this.Result=eval(this.AllKeysPushed);
     this.AllKeysPushed= this.AllKeysPushed+ " = ";
     this.AllKeysPushed= this.Result;
    },

    Eraser (){
    return this.AllKeysPushed = [];
    }
  }

}).mount('#app')

