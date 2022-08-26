namespace SampleAPI.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public string Pic { get; set; }
        public override bool Equals(object? obj)
        {
            return this.Id.Equals(((Product)obj).Id);
        }
    }
}
