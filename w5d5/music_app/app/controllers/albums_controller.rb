class AlbumsController < ApplicationController 
  def new 
    @bands = Band.all
    @band_id = params[:band_id]
    @album = Album.new 
    render :new 
  end

  def create 
    @album = Album.new(album_params)
    if @album.save 
      redirect_to album_url(@album)
    else
      flash.now[:errors] = ["Sorry, we were unable to save this album at the mo"]
      render :new
    end
  end

  def edit 

  end

  def show 
    @album = Album.find_by(id: params[:id])
    render :show
  end

  def update
  
  end

  def destroy 

  end

  private 
  def album_params
    params.require(:album).permit(:title, :studio, :year, :band_id)
  end

end