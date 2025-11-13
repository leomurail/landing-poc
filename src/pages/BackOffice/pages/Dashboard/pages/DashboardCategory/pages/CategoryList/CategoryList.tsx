import DashboardCard from "../../../../components/DashboardCard/DashboardCard";

export default function CategoryList() {
  return (
    <section id="category-list">
      <DashboardCard id={1} title="Category" name="category" />
      <DashboardCard id={2} title="Category" name="category" />
      <DashboardCard id={3} title="Category" name="category" />
      <DashboardCard id={4} title="Category" name="category" />
    </section>
  );
}
