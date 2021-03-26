<template>
  <div>
    <TargetComponent :list="list" :change-list="changeList" :check-item="changeChecked" />
  </div>
</template>

<script>
import TargetComponent from 'testquest';

export default {
  components: {
    TargetComponent,
  },
  data(){
    return {
      list: [
        {id: '1', text: 'Line 1'},
        {id: '2', text: 'Line 1'},
        {id: '3', text: 'Line 1'},
        {id: '4', text: 'Line 1'},
        {id: '5', text: 'Line 1'},
        {id: '6', text: 'Line 1'},
        {id: '7', text: 'Line 1'},
        {id: '8', text: 'Line 1'},
        {id: '9', text: 'Line 1'},
        {id: '10', text: 'Line 1'},
        {id: '11', text: 'Line 1'},
        {id: '12', text: 'Line 1'},
        {id: '13', text: 'Line 1'},
        {id: '14', text: 'Line 1'},
      ],
      checked: [],
    };
  },
  methods: {
    changeList(data) {
      this.list = [...data];
    },
    changeChecked(data) {
      this.checked = [...data];
    },
  },
}
</script>
