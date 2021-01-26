import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import service from "../api/service";

class UpdateProfile extends Component {
    state = {
        username: "",
        mail: "",
        image: "",
    };


    getProfileUser2 = async () => {
      await service.getProfileUser2(this.props.user._id);
      this.setState({
        username: this.props.user.username,
        mail: this.props.user.mail,
        image: this.props.user.image
      })
      console.log('USER PRIVATE JS', this.state)
    }

    componentDidMount = () => {
        this.getProfileUser2();
    }

    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({ [name]: value});
    }

    handleUpload3 = async (e) => {
        console.log("the file to be uploaded is: ", );
        // let poster = e.target.files[0]
        // creamos un nuevo objeto FormData
        const uploadData = new FormData();
        // poster (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
        uploadData.append("image", e.target.files[0]);
    
        try {
          const res = await service.handleUpload3(uploadData);
          this.setState({ image: res.secure_url });
        } catch (error) {
          console.log("Error while uploading the file: ", error);
        }
      };

      handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await service.updateProfile(this.state, this.props.match.params.id);
          this.setState({
            username: "",
            mail: "",
            image: "",
          });
    
        } catch (error) {
          console.log("Error while adding the User: ", error);
        }
        // this.props.history.goBack();
      };

      render() {
        return (
          <div>
            <form onSubmit={(e) => this.handleSubmit(e)} className="edit-form">
            <div className="img-align-profile" >
              <img src={this.state.image} style={{ borderRadius: '120px' }} alt="imagen" width="250" height="250" />
            </div>
            <h2>Update your Profile!</h2>
              <label htmlFor="">Name</label>
              <input className="input" type="text" name="username" value={this.state.username} placeholder={this.state.username} onChange={(e) => this.handleChange(e)}/>
              
              <label htmlFor="">Mail</label>
              <input
                className="input"
                type="text"
                name="mail"
                value={this.state.mail}
                placeholder={this.state.mail}
                onChange={(e) => this.handleChange(e)}
              />
    
              <label htmlFor="">Select image:</label>
              <input className="input" type="file" onChange={(e) => this.handleUpload3(e)} />

              <button className="boton azul" type="submit">Update profile</button>
            </form>
          </div>
        );
      }
    }

export default withAuth(UpdateProfile);