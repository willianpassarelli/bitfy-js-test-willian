import api from '../../config/bitpreco';

class TickerController {
  async index(req, res) {
    const response = await api.get('ticker').catch(() => {
      return res.status(400).json({ error: 'Error making request' });
    });

    const { last } = response.data;

    return res.json({ last });
  }
}

export default new TickerController();
