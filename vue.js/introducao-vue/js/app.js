var hello = new Vue({
    el: '#hello',
    data: {
      msg: 'Hello Vue!',
      peoples: [
        {name : 'Estevão'},
        {name : 'Fábio'},
        {name : 'Guilherme'},
        {name : 'Tiago'}
      ],
      newElement: '',
      elements: [],
      objectA: {
        'font-size': '30px'
      },
      objectB: {
        color: 'red'
      }
    },
    methods:{
      addElement: function(e) {
        var title  = this.newElement.trim();
        if(title){
          this.elements.push({title: title});
          this.newElement = '';
        }
      },
      removeElement: function(e, index){
        e.preventDefault();
        this.elements.splice(index, 1);
      },
      myClick : function () {
        console.log('ta clicando pq?');
      },
      myKeyUp: function () {
        console.log('keyup');
      }


    }
});
