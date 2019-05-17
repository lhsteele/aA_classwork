class BenchesController < ApplicationController
  def index
    @benches = Bench.all
    debugger
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :show
    else
      render json: {
        errors: {
          error_code: 422,
          message: 'No good'
        }
      }
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
