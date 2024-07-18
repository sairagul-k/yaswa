const Tour = require('./../models/tourmodel');

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};


exports.getAllTours = async (req, res) => {
  try{
    const tours= await Tour.find()
    res.status(200).json({
      status: 'success',
      // requestedAt: req.requestTime, for time reason we using this
      results: tours.length,
      data: {
        tours
      }
    });
  } catch(err){
     res.status(400).json({
      status:'fail',
      message:err
     })
  }
};


exports.getTour = async (req, res) => {
  try {

    const tour=await Tour.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
    
  } catch (error) {
    res.status(400).json({
      status:'fail',
      message:error
     })
  }
};



exports.updateTour = async(req, res) => {
  try {

    const tour= await Tour.findByIdAndUpdate(req.params.id, req.body,{
      new:true,
      runValidators:true
      });

      res.status(200).json({
        status: 'success',
        data: {
          tour
        }
      });
    } catch (error) {
    res.status(400).json({
      status:'fail',
      message:error
     })
  }
};



exports.deleteTour = async(req, res) => {
  try {

  await Tour.findByIdAndDelete(req.params.id)
    res.status(204).json({
    status: 'success',
    data: null
  });
    
  } catch (error) {

    res.status(400).json({
      status:'fail',
      message:error
     })
    
  }

};