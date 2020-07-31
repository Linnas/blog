<template>
	<div class="background">
		<div class="content">
			<div class="bareshit">
				Bəreshit
			</div>
			<div class="fileLoad" v-show="editing">
				<v-file-input v-model="fileEntity" color="#03A9F4" @change="upload">
					<template v-slot:selection="{ text }">
				      <v-chip
				 
				        label
				        color="primary"
				      >
				        {{ text }}
				      </v-chip>
				    </template>
				</v-file-input>
			</div>
			<v-card class="infocard py-8 mx-auto" max-width=400 min-height=300 style="background:rgba(136,136,136,0.6); margin-top: 5%" v-show="!editing">
				<div style="margin:0 30px" class="pb-8">
					<v-row>
						<span class="cardtext">Name: </span>
						<span class="cardtext answer">{{ fileName }}</span>
					</v-row>
					<v-row>
						<span class="cardtext">Size: </span>
						<span class="cardtext answer">{{ fileSize }}</span>
					</v-row>
					<v-row>
						<span class="cardtext">type: </span>
						<span class="cardtext answer">{{ fileType }}</span>
					</v-row>
				</div>
				
				<v-card-actions class="pa-0" >
					<v-btn block class="confirmBtn" @click="confirmAnalysis">Confirm</v-btn>
				</v-card-actions>
			</v-card>
			<div v-show="confirmed" class="progressBar">
				<div class="coolBorder">
					<v-progress-linear
				      v-model="percent"
				      color="blue-grey"
				      height="25"
				      rounded
				    >
				      <template v-slot="{ value }">
				        <strong>{{ Math.ceil(value) }}%</strong>
				      </template>
				    </v-progress-linear>
				</div>
				
			    <div class="white--text py-2" style="text-align: center">
			    	<span>Now loading</span>
					<div class="star">
						<div class="point"></div>
						<div class="point"></div>
						<div class="point"></div>
						<div class="point"></div>
						<div class="point"></div>
					</div>
			    </div>
			</div>
		</div>	
	</div>
</template>
<script>
export default {
	data: () => ({
		fileEntity:null,
		fileName:null,
		fileSize:null,
		fileType:null,
		editing:true,
		percent:30,
		confirmed:false,
		items: [
          {
            title: 'Attractions',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            title: 'Dining',
            active: true,
            items: [
              { title: 'Breakfast & brunch' },
              { title: 'New American' },
              { title: 'Sushi' },
            ],
          },
          {
            title: 'Education',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            title: 'Family',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            title: 'Health',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            title: 'Office',
            items: [
              { title: 'List Item' },
            ],
          },
          {
            title: 'Promotions',
            items: [
              { title: 'List Item' },
            ],
          },
        ],
	}),
	methods: {
		upload() {
			if(this.fileEntity) {
				console.log(this.fileEntity);
				this.editing = false;
				this.fileName = this.fileEntity.name.split('.')[0]
				this.fileSize = this.fileEntity.size/(1024*1024).toFixed(0)
				this.fileType = this.fileEntity.name.split('.')[1].toUpperCase()
			}
			
		},
		confirmAnalysis() {
			if(!this.confirmed) {
				this.confirmed = true;

			}
		}
	}
}
</script>
<style lang="scss">
@import "../../public/loadingstar.scss";
.background {
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-image: url("/upload.jpg");
}
.content {
	width:100%;
	height: 100%;
	background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
}
.fileLoad {
	margin: 5% 5%;
}
.bareshit {
	text-align: center;
	font-size: 2.4em;
	padding-top: 60px;
	color:#BDBDBD;
}
.cardtext {
	display: inline-block;
	color:rgba(34,34,34,0.9);
	font-size: 1.5em;
	margin-right:10px;
}
.answer {
	color:rgba(224, 224, 224, 0.8);
}
.confirmBtn {
	background-color: transparent !important;
	position: absolute;
	bottom: 0;
	width:100%;
	border: none;
	height:46px !important;
}
.v-btn__content {
	color:rgba(0, 0, 0, 0);
}
.v-btn__content:hover {
	color:rgba(0, 0, 0, 1);
}
.progressBar {
	position: absolute;
	bottom:5%;
	width:80%;
	margin: 5% 9%;
	
}
.coolBorder {
	background:
    linear-gradient(to right, white 4px, transparent 4px) 0 0,
    linear-gradient(to right, white 4px, transparent 4px) 0 100%,
    linear-gradient(to left, white 4px, transparent 4px) 100% 0,
    linear-gradient(to left, white 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, white 4px, transparent 4px) 0 0,
    linear-gradient(to bottom, white 4px, transparent 4px) 100% 0,
    linear-gradient(to top, white 4px, transparent 4px) 0 100%,
    linear-gradient(to top, white 4px, transparent 4px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 10px 10px;
}
</style>