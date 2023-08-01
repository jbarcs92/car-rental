module.exports = {
    create,
    deleteCar,
    update 
};

function create(req,res) {
    // Baby step...
    res.json({
      user: {
        name: req.body.name,
        email: req.body.email
    }
  });
}

async function deleteCar(req,res) {
    try {
      const deletedCar = await Car.findByIdAndDelete(req.params.id);
      if (!deletedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.json({ message: 'Car deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  }

  const updateCar = async (req, res) => {
        try {
          const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          if (!updatedCar) {
            return res.status(404).json({ error: 'Item not found' });
          }
          res.json(updatedCar);
        } catch (error) {
          res.status(500).json({ error: 'Something went wrong' });
        }
      };